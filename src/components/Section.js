function Section({ id, title, Component }) {
    return (
        <div id={id}>
            <h2>{title}</h2>
            {Component && <Component />}
        </div>
    );
}
export default Section