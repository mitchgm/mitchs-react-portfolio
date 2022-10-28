// This section will give a prospective employer the ability to contact me
<section id="contact-me" class="contact">
    <div>
        <h2 class="section-title primary-border">Contact Me</h2>
    </div>

    <div class="contact-info">
        <div>
            <h3>Mitch Marena</h3>
            <p>
                Please reach out with any inqueries! <br />
                Call me and leave a voicemail if I cannot pickup!
            </p>
            {/* introducing the address tag */}
            <address>
                P: 860.830.9516<br />

            </address>
        </div>
    </div>
    {/* Adding a contact form to the reach out section */}
    <div class="contact-form">
        <h3>Contact Me via Email</h3>
        <form action="https://formsubmit.co/mitchmarena@yahoo.com" method="POST">
            <label for="contact-name">Your Name</label>
            <input type="text" id="contact-name" placeholder="Your Name" required />

            <label for="contact-email">Your Email</label>
            <input type="text" id="contact-email" placeholder="Your Email" required />

            <label for="contact-message">Message</label>
            <textarea id="contact-message" placeholder="Message" required></textarea>

            <button type="submit">Submit</button>
        </form>

    </div>

</section>

