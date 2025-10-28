function IssueSection({ id, color, title, image, content }) {
  return (
    <>
      <section>
        <img src={image} alt={title} />
        <div>{content}</div>
      </section>
    </>
  );
}

export default IssueSection;
