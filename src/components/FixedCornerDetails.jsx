import logo from "../assets/images/backstage-talks-logo.png";

function FixedCornerDetails() {
  return (
    <>
      <div className="fixed inset-0 z-10 p-6 flex justify-between">

{/* FIRST SECTION */}
        <div className="flex flex-col justify-between">
            {/* upper left - backstage logo */}
          <div>
            <img src={logo} alt="logo" className="w-2xs h-auto" />
          </div>

            {/* bottom left - backstage description and privacy policy */}
          <div className="max-w-xs leading-relaxed">
            <p>
              Backstage Talks is a magazine of casual, but in depth dialogues on
              design and business. Our decisions shape and influence this
              complex world—to have a chance to make the right ones, we need to
              talk.
            </p>
            <span>
              © 2025{" "}
              <a href="#">Published by Büro Milk</a>
            </span>
            <a href="
            #" className="underline">Privacy Policy</a>
          </div>
        </div>

        {/* SECOND SECTION */}
        <div className="flex flex-col justify-between text-right">
            {/* upper right email */}
          <div>
            <a href="info@backstagetalks.com" className="font-bold hover:underline">info@backstagetalks.com</a>
          </div>

            {/* bottom right anchors - don't show this in tablet and mobile view */}
          <div className="flex flex-col text-right">
            {[8, 7, 6, 5, 4, 3, 2, 1].map((num) => (
            <a
              key={num}
              href={`#section${num}`}
              className="hover:underline font-base"
            >
              Issue #{num}
            </a>
          ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default FixedCornerDetails;
