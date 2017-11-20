package reviewsitefullstack;

import java.util.Set;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ReviewsSiteController {

	@Resource
	ReviewRepository reviewRepo;

	@Resource
	CategoryRepository categoryRepo;

	@Resource
	TagRepository tagRepo;

	@RequestMapping("/")
	public String redirectToReviews(Model model) {
		return "redirect:/reviews";
	}

	@RequestMapping("/reviews")
	public String showAllReviews(Model model) {
		model.addAttribute("reviews", reviewRepo.findAll());
		return "reviews";
	}

	@RequestMapping("/review")
	public String showOneReview(@RequestParam(value = "id") Long reviewId, Model model) {
		model.addAttribute("review", reviewRepo.findOne(reviewId));
		return "review";
	}

	@RequestMapping("/categories")
	public String showAllCategories(Model model) {
		model.addAttribute("categories", categoryRepo.findAll());
		return "categories";
	}

	@RequestMapping("/category")
	public String showOneCategory(@RequestParam(value = "id") Long categoryId, Model model) {
		model.addAttribute("category", categoryRepo.findOne(categoryId));
		return "category";
	}

	@RequestMapping("/tags")
	public String showAllTags(Model model) {
		model.addAttribute("tags", tagRepo.findAll());
		return "tags";
	}

	@RequestMapping("/tag")
	public String showOneTag(@RequestParam(value = "id") Long tagId, Model model) {
		model.addAttribute("tag", tagRepo.findOne(tagId));
		return "tag";
	}

	@RequestMapping("/add-tag")
	public String addTag(@RequestParam Long id, String tagName) {
		Tag newTag = tagRepo.findByTagName(tagName);
		if (newTag == null) {
			newTag = new Tag(tagName);
			tagRepo.save(newTag);
		}
		Review taggedReview = reviewRepo.findOne(id);
		Set<Tag> currentTags = taggedReview.getTags();
		if (!currentTags.contains(newTag)) {
			taggedReview.addTag(newTag);
			reviewRepo.save(taggedReview);
		}
		return "redirect:/review?id=" + id;
	}

	@RequestMapping("/remove-tag")
	public String removeTag(@RequestParam Long id, String tagName) {
		Tag tagBeingRemoved = tagRepo.findByTagName(tagName);
		if (tagBeingRemoved != null) {
			Review review = reviewRepo.findOne(id);
			Set<Tag> tagsOnReview = review.getTags();
			if (tagsOnReview.contains(tagBeingRemoved)) {
				review.removeTag(tagBeingRemoved);
				reviewRepo.save(review);
			}
		}
		return "redirect:/review?id=" + id;
	}

	@RequestMapping("/remove-tag-cancelled")
	public String removeTagCancelled(@RequestParam Long id, String tagName) {
		return "redirect:/review?id=" + id;
	}

}
