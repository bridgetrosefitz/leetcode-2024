import submitForm from "./submitForm";

export default function App() {
  return (
    <form
      action="https://www.greatfrontend.com/api/questions/contact-form"
      method="post"
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          rowGap: 10,
          padding: 10,
        }}
      >
        <label name="name">Name </label>
        <input name="name" type="text" />
        <label name="email">Email </label>
        <input name="email" type="text" />
        <label name="message">Message </label>
        <textarea name="message" />
        <input
          style={{ width: "fit-content", padding: "0 10px 0 10px" }}
          type="submit"
          value="Send"
        />
      </div>
    </form>
  );
}
