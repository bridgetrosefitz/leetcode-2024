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
      <div style={{ margin: 5 }}>
        <label style={{ display: "inline-block", width: 100 }} name="name">
          Name{" "}
        </label>
        <input name="name" type="text" />
      </div>
      <div style={{ margin: 5 }}>
        <label style={{ display: "inline-block", width: 100 }} name="email">
          Email{" "}
        </label>
        <input name="email" type="text" />
      </div>
      <div style={{ margin: 5 }}>
        <label style={{ display: "inline-block", width: 100 }} name="message">
          Message{" "}
        </label>
        <textarea name="message" />
      </div>
      <input type="submit" value="Send" />
    </form>
  );
}
