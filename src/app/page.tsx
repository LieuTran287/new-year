import Container from "@/app/_components/container";

export default function Index() {
  return (
    <main>
      <Container>
        <div className="relative mt-16 h-[320px]">
          <span className="absolute text-[180px] font-extrabold leading-none text-[#f5f1e6] left-0 top-0">
            2
          </span>
          <span className="absolute text-[180px] font-extrabold leading-none text-[#f3b2b8] left-[80px] top-0">
            0
          </span>
          <span className="absolute text-[180px] font-extrabold leading-none text-[#7a86b6] left-0 top-[140px]">
            2
          </span>
          <span className="absolute text-[180px] font-extrabold leading-none text-[#f5f1e6] left-[80px] top-[140px]">
            5
          </span>
        </div>
      </Container>
    </main>
  );
}
