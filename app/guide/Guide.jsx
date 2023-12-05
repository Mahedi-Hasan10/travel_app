import Image from "next/image";

const Guide = () => {
  return (
      <section className="relative z-20 grid lg:grid-cols-2 grid-cols-1 max-w-[90%] mx-auto py-8">
        <div className="max-w-[70%]">
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          />
          <h1 className="bold-40 lg:bold-64">Guide You to Easy Path</h1>
        </div>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] md:max-w-[70%]">
          Only with the hilink application you will no longer get lost and get
          lost again, because we already support offline maps when there is no
          internet connection in the field. Invite your friends, relatives and
          friends to have fun in the wilderness through the valley and reach the
          top of the mountain
        </p>
      </section>
      
    );
};

export default Guide;
