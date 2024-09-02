import ContactsStyle from './Contacts.module.css'

export default function Contacts() {
    return (
        <div className={ContactsStyle.containerContacts} >
            <div className={ContactsStyle.containerTitle}>
                <h2 className={ContactsStyle.title}>Contacts</h2>
            </div>
            <p className={ContactsStyle.contactParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus nostrum nobis voluptate doloremque, ut, fuga
            vel quod veritatis dolore eveniet voluptatem repudiandae,
            perferendis iure sequi. Dolores nisi eligendi modi aspernatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nihil incidunt facilis enim, veritatis repudiandae doloribus
            quaerat? Quis temporibus, voluptates eius aliquam eveniet
                facere cum similique eum rerum minima, quibusdam dolorem.
                </p>
        </div>
    );
}