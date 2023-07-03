import '../Floatingdiv/Floating.css'

const Floatingdiv = ({image, txt1, txt2}) => {
    return (
        <div className="floatingdiv">
            <img className='CrownIMG' src={image}></img>
            <span>
                {txt1}
                <br></br>
                {txt2}
            </span>
        </div>
    );
};

export default Floatingdiv;