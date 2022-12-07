import Link from "next/link"

const Footer = () => {
    return (
        <div className="row">
            <div className="col">
                <div className="container-fluid pb-2 text-center border-top border-light pt-2 bg-secondary text-white">
                    <div className="row">
                        <div className="col">
                            <h6>
                                <Link href="/" className="text-white">Home</Link> | <Link href="/terms" className="text-white">Terms of Service</Link> | <Link href="/privacy" className="text-white">Privacy Policy</Link><br /><br />
                                &copy; {(new Date().getFullYear())} Cheeky Ginger Studio LLC. All Rights Reserved.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;