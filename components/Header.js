import Link from "next/link";

const Header = () => {
    return (
        <div className="row mx-0">
            <div className="col px-0">
                <nav className="navbar navbar-expand-lg bg-primary sticky-top">
                    <div className="container">
                        <Link href="/" className="navbar-brand text-white">
                            <img src="https://galacticblue.net/cheekyginger/img/Kiss-1-Cheeky-Ginger-Studio.png" height="75" alt="Cheeky Ginger Studio" className="float-start" />
                            <span className="caption-text">Cheeky Ginger Studio<br />
                            One of a Kind Art<br />
                            by artist S.J. Johnson</span>
                        </Link>
                        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
                                <li className="nav-item dropdown px-1">
                                    <Link href="/" className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown">Home</Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link href="/privacy" className="dropdown-item">Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link href="/terms" className="dropdown-item">Terms of Service</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown px-1">
                                    <Link href="/" className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown">Products</Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link href="/products/watercolors" className="dropdown-item">Watercolors</Link>
                                        </li>
                                        <li>
                                            <Link href="/products/prints" className="dropdown-item">Prints</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item px-1">
                                    <Link href="/videos" className="nav-link text-white">YouTube Videos</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;
