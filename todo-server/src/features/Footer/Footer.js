import './Footer.css';

export default function Footer(prors) {
    return (
        <div className={'footerWrapper btn-group'}>
            <button className={'btn btn-outline-secondary'}>All</button>
            <button className={'btn btn-outline-secondary'}>Done</button>
            <button className={'btn btn-outline-secondary'}>Not done</button>
        </div>
    );
}