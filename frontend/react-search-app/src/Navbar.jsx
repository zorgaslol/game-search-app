import EnebaLogo from "./assets/enebaIcon.svg";


function Navbar({ search, setSearch }) {
  return (
    <header className="navbar">
      <div className="navInner">
        <div className="navLeft">
            <img src={EnebaLogo} alt="Eneba" className="logoImg" />
        </div>
        <div className="searchWrap">
          <svg
            className="searchIconSvg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <g clipPath="url(#clip)">
                <path
                d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
                <path
                d="M16.5 16.5 21 21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </g>

            <defs>
                <clipPath id="clip">
                <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>

          <input
            className="searchInput"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="iconBtn clearBtn" type="button" onClick={() => setSearch("")}>
              ✕
            </button>
          )}
        </div>

        <button className="langWrap" type="button">
          🇱🇹 <span>English EU</span> <span className="sep">|</span> <span>EUR</span>
        </button>
        <div className="iconsWrap">
            <button className="iconBtn mobileOnly" type="button" aria-label="Search">
                <svg className="navIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            <button className="iconBtn" aria-label="Liked" type="button">
                <svg
                    className="navIcon"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1.5"
                    fill="none"
                >
                    <path
                    d="M12,21.844l-9.588-10A5.672,5.672,0,0,1,1.349,5.293h0a5.673,5.673,0,0,1,9.085-1.474L12,5.384l1.566-1.565a5.673,5.673,0,0,1,9.085,1.474h0a5.673,5.673,0,0,1-1.062,6.548Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg>
            </button>

            <button className="iconBtn" aria-label="Cart" type="button">
                <svg
                    className="navIcon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M12 12.7499H5.386C5.1498 12.75 4.9212 12.6664 4.74067 12.5139C4.5602 12.3615 4.43953 12.1502 4.4 11.9173L2.642 1.58395C2.60233 1.35119 2.4816 1.13996 2.30113 0.987686C2.12067 0.835406 1.89213 0.7519 1.656 0.751953H1"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                    <path
                    d="M10.75 14.75C10.8881 14.75 11 14.6381 11 14.5C11 14.3619 10.8881 14.25 10.75 14.25"
                    stroke="currentColor"
                    />
                    <path
                    d="M10.75 14.75C10.6119 14.75 10.5 14.6381 10.5 14.5C10.5 14.3619 10.6119 14.25 10.75 14.25"
                    stroke="currentColor"
                    />
                    <path
                    d="M5.75 14.75C5.88807 14.75 6 14.6381 6 14.5C6 14.3619 5.88807 14.25 5.75 14.25"
                    stroke="currentColor"
                    />
                    <path
                    d="M5.75 14.75C5.61193 14.75 5.5 14.6381 5.5 14.5C5.5 14.3619 5.61193 14.25 5.75 14.25"
                    stroke="currentColor"
                    />
                    <path
                    d="M4.03141 9.75007H12.0787C12.5247 9.75001 12.9578 9.60094 13.3093 9.32647C13.6608 9.05207 13.9105 8.66801 14.0187 8.23541L14.9854 4.36873C15.0038 4.29499 15.0052 4.21802 14.9895 4.14366C14.9737 4.0693 14.9412 3.99952 14.8944 3.93961C14.8476 3.87971 14.7878 3.83126 14.7194 3.79795C14.6511 3.76465 14.5761 3.74736 14.5001 3.7474H3.01075"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg>
            </button>


            <button className="iconBtn" aria-label="Profile" type="button">
                <svg
                    className="navIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 25"
                >
                    <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.667 1.75a5.417 5.417 0 1 0 0 10.834 5.417 5.417 0 0 0 0-10.834Zm-2.77 2.647a3.917 3.917 0 1 1 5.54 5.54 3.917 3.917 0 0 1-5.54-5.54ZM6.07 16.902A7.917 7.917 0 0 1 19.583 22.5a.75.75 0 0 0 1.5 0 9.417 9.417 0 1 0-18.833 0 .75.75 0 0 0 1.5 0c0-2.1.834-4.113 2.319-5.598Z"
                    />
                </svg>
            </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;
