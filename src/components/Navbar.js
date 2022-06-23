const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#612378', border: '3px soild #fff'}}>
                <div className="container-fluid">
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">เกี่ยวกับหมอหมึก</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">บทความ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">จองคิว</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;