import React from "react";
function Contact() {
    return (
        <section id="contactme" class="section scrollspy full-height">
                    <h3 class="page-title white-text teal">Contact</h3>
                    <div class="containerr">
                        <p className="contact1">
                            <a aria-label="Call Saumya" data-position="top" data-tooltip="Call Saumya"
                                class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                                    class="fa fa-phone"></i><a aria-label="Call Saumya">+1 647-675-4305</a></a>
                        </p>
                        <p className="contact2">
                            <a aria-label="Email Saumya" href="mailto:saumyapandya2601@gmail.com" target="_blank"
                                data-position="top" data-tooltip="Email Saumya"
                                class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                                    class="fa fa-envelope"></i><a aria-label="Email Saumya"
                                    href="mailto:saumyapandya2601@gmail.com"
                                    class="hoverline">saumyapandya2601@gmail.com</a></a>
                        </p>
                       
                    </div>
                </section>
    );
}

export default Contact;
