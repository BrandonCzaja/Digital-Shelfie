const React = require("react");

// Remember, props are the attributes of the form
class Form extends React.Component {
    render() {
        const [formData, setFormData] = React.useState();

        const handleChange = (event) => {
            setFormData({ ...formData, [event.target.name]: event.target.value });
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            props.handleSubmit(formData);
        };

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </form>
                <input type="submit" value="Search" />
            </>
        );
    }
}

module.exports = Form;
