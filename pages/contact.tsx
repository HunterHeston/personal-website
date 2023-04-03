export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <form action="submit">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
