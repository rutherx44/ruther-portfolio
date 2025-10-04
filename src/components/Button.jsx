import React from "react";

export const Button = ({ displayText = "Download Resume" }) => {
  return (
    <button className="bg-primary rounded-full hover:bg-primary/60 active:bg-logo-bg transitions cursor-pointer">
      <p
        title={displayText}
        className="text-center align-middle secondary-body-uc button-padding "
      >
        {displayText}
      </p>
    </button>
  );
};

export const ButtonLink = ({ displayText = "Link", onClick }) => {
  return (
    <button
      title={displayText}
      onClick={onClick}
      className="w-fit cursor-pointer"
    >
      <p className="secondary-body text-white/50 hover:text-white transitions">
        {displayText}
      </p>
    </button>
  );
};

export const SocialButton = () => {
  return (
    <>
      <div className="flex justify-center gap-1.5 md:gap-2 lg:gap-2.5">
        <a
          href="mailto:ruther.diox44@gmail.com"
          title="Gmail"
          target="_blank"
          rel="noreferrer"
          className="group border-[1.5px] md:border-2 border-white/50 hover:border-white icon-container rounded-full transitions"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            color="#8F8F8F"
            fill="none"
            className="icon group-hover:text-white transitions"
          >
            <path
              d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
              stroke="currentColor"
              className="icon-stroke"
              strokeLinejoin="round"
            ></path>
            <path
              d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
              stroke="currentColor"
              className="icon-stroke"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/ruther-dio/"
          title="Linkedin"
          target="_blank"
          rel="noreferrer"
          className="group border-[1.5px] md:border-2 border-white/50 hover:border-white icon-container rounded-full transitions"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            color="#8F8F8F"
            fill="none"
            className="icon group-hover:text-white transitions"
          >
            <path
              d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z"
              stroke="currentColor"
              className="icon-stroke"
            ></path>
            <path
              d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"
              stroke="currentColor"
              className="icon-stroke"
            ></path>
            <path
              d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z"
              stroke="currentColor"
              className="icon-stroke"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
        <a
          href="https://github.com/rutherx44"
          title="Github"
          target="_blank"
          rel="noreferrer"
          className="group border-[1.5px] md:border-2 border-white/50 hover:border-white icon-container rounded-full transitions"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            color="#8F8F8F"
            fill="none"
            className="icon group-hover:text-white transitions"
          >
            <path
              d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17"
              stroke="currentColor"
              className="icon-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22"
              stroke="currentColor"
              className="icon-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.behance.net/rutherdio"
          title="Behance"
          target="_blank"
          rel="noreferrer"
          className="group border-[1.5px] md:border-2 border-white/50 hover:border-white icon-container rounded-full transitions"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            color="#8F8F8F"
            fill="none"
            className="icon group-hover:text-white transitions"
          >
            <path
              d="M2 12H7.625M7.4 5H4C3.05719 5 2.58579 5 2.29289 5.29289C2 5.58579 2 6.05719 2 7V17C2 17.9428 2 18.4142 2.29289 18.7071C2.58579 19 3.05719 19 4 19H7.4C9.38823 19 11 17.433 11 15.5C11 13.567 9.38823 12 7.4 12C9.38823 12 11 10.433 11 8.5C11 6.567 9.38823 5 7.4 5Z"
              stroke="currentColor"
              className="icon-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M20 7H16M14 14H22C22 11.9587 20.2091 10 18 10C15.7909 10 14 11.9587 14 14ZM14 14V15C14 17.2091 15.7909 19 18 19C19.4806 19 20.7733 18.1956 21.4649 17"
              stroke="currentColor"
              className="icon-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
        {/* <a
          href="https://dribbble.com/rthrx44/shots/"
          title="Dribbble"
          target="_blank"
          rel="noreferrer"
          className="group border-[1.5px] md:border-2 border-white/50 hover:border-white icon-container rounded-full transitions"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            color="#8F8F8F"
            fill="none"
            className="icon group-hover:text-white transitions"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              className="icon-stroke"
            ></circle>
            <path
              d="M22 13.2644C21.0732 13.0906 20.12 13 19.1472 13C13.7948 13 9.03435 15.7425 6 20"
              stroke="currentColor"
              className="icon-stroke"
              strokeLinejoin="round"
            ></path>
            <path
              d="M19 5C15.8705 8.66742 11.1679 11 5.90962 11C4.56437 11 3.25548 10.8473 2 10.5587"
              stroke="currentColor"
              className="icon-stroke"
              strokeLinejoin="round"
            ></path>
            <path
              d="M14.6178 22C14.8684 20.786 15 19.5287 15 18.2407C15 11.9247 11.8343 6.34645 7 3"
              stroke="currentColor"
              className="icon-stroke"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a> */}
      </div>
    </>
  );
};
