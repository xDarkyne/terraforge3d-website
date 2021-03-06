import { FunctionComponent, SyntheticEvent, useRef, useState } from 'react';

interface IFormspreeFormProps {
  formID: string;
  silent?: boolean;
  classNames?: string[];
}

export const FormspreeForm: FunctionComponent<IFormspreeFormProps> = ({
  formID,
  silent,
  classNames,
}) => {
  /**
   * Get the form element so we can interact with it.
   * Example: resetting the form.
   */
  const form = useRef<HTMLFormElement>(null);

  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://formspree.io/f/${formID}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setStatus('Thanks for your submission!');
        form.current?.reset();
      } else {
        const data = await response.json();
        if (data.hasOwnProperty('errors')) {
          setStatus(
            data['errors'].map((error: any) => error['message']).join(', ')
          );
        } else {
          setStatus('Oops! There was a problem submitting your form');
        }
      }
    } catch (error: any) {
      setStatus('Oops! There was a problem submitting your form');
    }
  };

  return (
    <form ref={form} onSubmit={submitHandler} className={classNames?.join(' ')}>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </label>
      <label htmlFor="message">
        Message:
        <input
          type="text"
          name="message"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        />
      </label>
      <input type="submit" value="Send Message" />
      {!silent && <p id="my-form-status">{status}</p>}
    </form>
  );
};
