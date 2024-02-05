import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/react.svg";
import Button from "../components/Button";
import { useState } from "react";
function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`flex gap-4 items-center flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon">
          <Menu size={24} />
        </Button>
        <a href="/">
          <img src={logo} alt="logo" className="h-6" />
        </a>
      </div>
      <form
        className={` gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-1-0 flex-shrink-0">
            <Search size={24} />
          </Button>
        </div>
        {showFullWidthSearch && (
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
            onClick={() => setShowFullWidthSearch(false)}
          >
            <ArrowLeft size={24} />
          </Button>
        )}
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic size={24} />
        </Button>
      </form>
      <div
        className={`flex flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
        >
          <Search size={24} className="md:hidden" />
        </Button>
        <Button size="icon" variant="ghost">
          <Mic size={24} className="md:hidden" />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload size={24} />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell size={24} />
        </Button>
        <Button size="icon" variant="ghost">
          <User size={24} />
        </Button>
      </div>
    </div>
  );
}

export default PageHeader;
