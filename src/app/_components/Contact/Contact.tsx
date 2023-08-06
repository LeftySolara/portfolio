const Contact = () => {
  return (
    <div className="flex flex-col justify-evenly self-center w-5/6">
      <h2 className="font-bold font-heading self-center text-green-600 text-3xl mt-12 mb-4">
        Get In Touch
      </h2>
      <p className="text-center">
        If you'd like to work together or have any questions, my inbox is always
        open. Feel free to send me an email at{" "}
        <a href="mailto:julianne@julianneadams.info" className="text-green-600">
          julianne@julianneadams.info.
        </a>
      </p>
      <a
        href="mailto:julianne@julianneadams.info"
        className="self-center mt-4 px-6 py-2 rounded-md bg-secondary text-orange-50 font-bold"
      >
        Say Hello
      </a>
    </div>
  );
};

export default Contact;
