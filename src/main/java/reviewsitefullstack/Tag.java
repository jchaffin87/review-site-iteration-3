package reviewsitefullstack;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Tag {

	@Id
	@GeneratedValue
	private Long tagId;
	private String tagName;

	@ManyToMany(mappedBy = "tags")
	protected Set<Review> reviewsTagged = new HashSet<Review>();

	protected Tag() {

	}

	public Tag(String tagName, Review... reviewsTagged) {
		this.tagName = tagName;
	}

	public Long getTagId() {
		return tagId;
	}

	public String getTagName() {
		return tagName;
	}

	public Set<Review> getReviewsTagged() {
		return reviewsTagged;
	}

	// public void addReviewTagged(Review) {
	// if (!tagName.equals("")) {
	// Review newReview = new Review();
	// reviewsTagged.addAll(newReview);
	// }
	// }

	@Override
	public String toString() {
		return String.format("Tag[tagId='%d', tagName='%s', reviewsTagged='%s']", tagId, tagName, reviewsTagged);
	}

}
