const Map = () => {
  return (
    <>
      <div className="w-[100%] h-auto  flex flex-col justify-center items-center mt-7">
        <h1 className="text-center font-sans text-4xl ">
          Kishan Electronics store (Bijali ghar)
        </h1>
        <div className="w-[95%] h-auto flex justify-center items-center mt-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d890.4375391989357!2d85.561899!3d26.7842329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec8b386f47771b%3A0x694c5eb953863148!2sBIJLI%20GHAR!5e0!3m2!1sen!2sin!4v1709018379644!5m2!1sen!2sin"
            width="95%"
            className="h-[450px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[650px] bg-gray-200 rounded-md"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Map;
