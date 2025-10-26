import logo from "../assets/images/backstage-talks-logo.png";

function FixedCornerDetails() {
  return (
    <>
      <div className="p-4 h-screen flex justify-between">

{/* FIRST SECTION */}
        <div className="flex flex-col justify-between">
          <div>
            <img src={logo} alt="logo" className="w-2xs h-auto" />
          </div>
          <div className="max-w-xs">
            <p>
              Backstage Talks is a magazine of casual, but in depth dialogues on
              design and business. Our decisions shape and influence this
              complex world—to have a chance to make the right ones, we need to
              talk.
            </p>
            <span>
              © 2025
              <a href="">Published by Büro Milk</a>
            </span>
            <a href="">Privacy Policy</a>
          </div>
        </div>

        {/* SECOND SECTION */}
        <div className="flex flex-col justify-between">
          <div>
            <a href="info@backstagetalks.com" className="font-bold hover:underline">info@backstagetalks.com</a>
          </div>

          <div className="flex flex-col text-right">
            <a href="#section8" className="hover:underline">Issue #8</a>
            <a href="#section7" className="hover:underline">Issue #7</a>
            <a href="#section6" className="hover:underline">Issue #6</a>
            <a href="#section5" className="hover:underline">Issue #5</a>
            <a href="#section4" className="hover:underline">Issue #4</a>
            <a href="#section3" className="hover:underline">Issue #3</a>
            <a href="#section2" className="hover:underline">Issue #2</a>
            <a href="#section1" className="hover:underline">Issue #1</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FixedCornerDetails;
