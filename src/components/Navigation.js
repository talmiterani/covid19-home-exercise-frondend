import React from 'react'

export default function Navigation() {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary align-items-center ">
                <a href="/" className="navbar-brand text-left mb-5 ">The COVID<br></br> Tracking Project</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse2">
                    <div className="navbar-nav" style={{fontSize:"20px"}}>
                        <a href="/" className="nav-item nav-link active">Home</a>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            The data
                            </a>
                            <div className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item " href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            About the data
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    <form className="form-inline ml-auto">
                        <input type="text" className="form-control mr-sm-2" placeholder="Search"/>
                        <button type="submit" className="btn btn-outline-light">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
