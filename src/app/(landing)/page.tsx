import HomeHero from "@/components/molecules/home/HomeHero";
import FlexP from "@/icons/FlexP";
import GrpClasses from "@/icons/GrpClasses";
import IRP from "@/icons/IRP";
import TwoLocs from "@/icons/TwoLocs";
import ImageBox from "@/molecules/ImageBox";
import Badge from "@/molecules/home/Badge";
import GroupedClasses from "@/molecules/home/GroupedClasses";
import Container from "@/ui/container";

const badges = [
  {
    icon: <IRP />,
    label: "IREP Certified Trainers",
  },
  {
    icon: <TwoLocs />,
    label: "Two Locations",
  },
  {
    icon: <GrpClasses />,
    label: "Group X Classes",
  },
  {
    icon: <FlexP />,
    label: "Flexible Pricing",
  },
];

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Container className="grid md:grid-cols-12 gap-[2%] my-10 md:my-[2.5%]">
        <article
          className="rounded-xl md:col-span-6 md:col-start-7 bg-sec
        py-8 px-5 md:p-[5%] xl:py-16 xl:px-16
        "
        >
          <h2 className="text-2xl font-bold text-pry xl:text-5xl md:text-3xl ">
            Helping You Make Fitness A Lifestyle
          </h2>
          <p className="text-white mt-[10%] text-sm md:text-lg xl:text-2xl">
            We combine various fitness mediums like strength training, circuit
            and aerobic training, cardio, dance exercises and more in activities
            and initiatives that help you keep a lifestyle of fitness no matter
            your preference, level of proficiency or age.
          </p>
        </article>

        <ImageBox
          src="/images/help-us.jpg"
          className="md:col-start-1 md:row-start-1 md:col-span-6 min-h-[350px] md:min-h-[0px]"
        />
      </Container>

      <Container className="space-y-[10%] md:space-y-[2%] my-[20%] md:my-[10%]">
        <h2 className="text-2xl font-bold text-center xl:text-5xl md:text-3xl ">
          Choose Your Fitness, Your Way
        </h2>

        <p className="w-4/5 mx-auto text-center md:w-1/3">
          We Have A Variety Of Fitness Options For You To Choose From,
          Ultimately Helping You Live A Healthier Lifestyle.
        </p>

        <div className="center md:space-y-0 space-y-[5%] md:space-x-[5%] !flex-col md:!flex-row  ">
          {badges.map((t) => (
            <Badge icon={t.icon} label={t.label} key={t.label} />
          ))}
        </div>
      </Container>

      <GroupedClasses />
    </main>
  );
}
