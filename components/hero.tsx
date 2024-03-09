import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:p-8">
      <div className="lg:w-1/3 lg:px-4">
        <Image
          src="/piyush.jpg"
          alt="Headshot of Piyush Gogawale"
          width={600}
          height={600}
          className="rounded-md"
        />
      </div>
      <div className="lg:w-2/3 lg:px-4 text-justify mt-6 lg:mt-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, et
        adipisci! Ullam officia, maxime dolores magnam quo facilis praesentium
        doloremque dolorem, harum autem impedit accusantium explicabo nam
        expedita necessitatibus ad? Beatae officiis maiores sunt eius in dolorem
        nostrum fugit sapiente rem, enim totam suscipit consectetur temporibus
        similique earum itaque laborum odit corporis dolore placeat nobis, non
        ipsam aliquid. Tempore, quos! Neque tempora id minus sint odit
        repellendus minima ipsam vel sunt nihil! Natus aut aperiam voluptates
        sed, pariatur in, molestias, quos voluptatem numquam possimus accusamus
        incidunt deleniti ex? Vero, atque? Qui corporis aspernatur quibusdam
        natus ad sed tempora culpa vitae dignissimos aliquam eveniet, pariatur
        asperiores ullam eaque totam consequatur tenetur eum, velit a
        repellendus. At iusto facere ea maxime alias!
        <br />
        <br />
        Recusandae deleniti, nemo illum obcaecati dolorem vero perferendis eaque
        dolores illo alias suscipit voluptatum minus quisquam molestiae eligendi
        maxime dignissimos amet ipsam sit et reiciendis cum error. Dolor, culpa
        saepe! Blanditiis sequi a necessitatibus laboriosam, nobis consequatur
        impedit nisi eum voluptates amet unde ullam quo omnis et libero magni,
        ad mollitia quasi ipsum nostrum earum tempore? Corporis soluta facere
        voluptates?
      </div>
    </div>
  );
}

export default Hero;
