import { Button } from '@mui/material'

const HpButton = ({ text, refunc }) => {

    return(
        <Button 
            variant="outlined"
            style={{
                borderRadius: 35,
                padding: "18px 36px",
                fontSize: "15px",
                color: "white",
                borderColor: "white",
                marginInline: "1vw"
            }}
            onClick={() => refunc.current.scrollIntoView()}>
            {text}
        </Button>
    );
}

export default HpButton;