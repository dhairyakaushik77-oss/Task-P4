import { useState } from "react";
import "./NewPost.css";

function NewPost() {
  // Which form is showing: "question" or "article"
  const [postType, setPostType] = useState("question");

  // Form fields
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [abstract, setAbstract] = useState("");
  const [articleText, setArticleText] = useState("");
  const [tags, setTags] = useState("");

  // Validation errors, e.g. { title: "Title is required." }
  const [errors, setErrors] = useState({});

  // Turn "java, react, css" into ["java", "react", "css"]
  const getTagList = () =>
    tags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t !== "");

  // Check every field and return an object of error messages
  const validate = () => {
    const newErrors = {};

    if (title.trim().length < 5) {
      newErrors.title = "Title is required (at least 5 characters).";
    }

    if (postType === "question") {
      if (problem.trim().length < 20) {
        newErrors.problem = "Please describe your problem (at least 20 characters).";
      }
    } else {
      if (abstract.trim().length < 20) {
        newErrors.abstract = "Abstract is required (at least 20 characters).";
      }
      if (articleText.trim().length < 50) {
        newErrors.articleText = "Article text is required (at least 50 characters).";
      }
    }

    const tagList = getTagList();
    if (tagList.length === 0) {
      newErrors.tags = "Please add at least 1 tag.";
    } else if (tagList.length > 3) {
      newErrors.tags = "You can add up to 3 tags only.";
    }

    return newErrors;
  };

  const handleTypeChange = (type) => {
    setPostType(type);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Popup for error
      alert("Error: your post could not be sent. Please fix the highlighted fields.");
      return;
    }

    // Popup for success (real posting will be added in a future task)
    alert("Your post has been sent successfully!");

    // Clear the form
    setTitle("");
    setProblem("");
    setAbstract("");
    setArticleText("");
    setTags("");
    setErrors({});
  };

  return (
    <form className="newpost" onSubmit={handleSubmit} noValidate>
      <div className="newpost-bar">New Post</div>

      <div className="newpost-type">
        <span>Select Post Type:</span>
        <label>
          <input
            type="radio"
            name="postType"
            checked={postType === "question"}
            onChange={() => handleTypeChange("question")}
          />
          Question
        </label>
        <label>
          <input
            type="radio"
            name="postType"
            checked={postType === "article"}
            onChange={() => handleTypeChange("article")}
          />
          Article
        </label>
      </div>

      <div className="newpost-bar">What do you want to ask or share</div>

      <div className="newpost-row">
        <label className="newpost-label" htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={
            postType === "question"
              ? "Start your question with how, what, why, etc."
              : "Enter a descriptive title"
          }
        />
      </div>
      {errors.title && <p className="newpost-error">{errors.title}</p>}

      {/* Conditional rendering: different fields for each post type */}
      {postType === "question" ? (
        <>
          <label className="newpost-label" htmlFor="problem">Describe your problem</label>
          <textarea
            id="problem"
            className="newpost-big"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          />
          {errors.problem && <p className="newpost-error">{errors.problem}</p>}
        </>
      ) : (
        <>
          <label className="newpost-label" htmlFor="abstract">Abstract</label>
          <textarea
            id="abstract"
            className="newpost-small"
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
            placeholder="Enter a 1-paragraph abstract"
          />
          {errors.abstract && <p className="newpost-error">{errors.abstract}</p>}

          <label className="newpost-label" htmlFor="articleText">Article Text</label>
          <textarea
            id="articleText"
            className="newpost-medium"
            value={articleText}
            onChange={(e) => setArticleText(e.target.value)}
            placeholder="Enter your article text"
          />
          {errors.articleText && <p className="newpost-error">{errors.articleText}</p>}
        </>
      )}

      <div className="newpost-row">
        <label className="newpost-label" htmlFor="tags">Tags</label>
        <input
          id="tags"
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder={`Please add up to 3 tags to describe what your ${postType} is about e.g., Java`}
        />
      </div>
      {errors.tags && <p className="newpost-error">{errors.tags}</p>}

      <div className="newpost-actions">
        <button type="submit">Post</button>
      </div>
    </form>
  );
}

export default NewPost;