import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
interface IProps {
    images: string[]
}


const ModalImageCarrusel: React.FC<IProps> = ({ images }) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        maxSteps === 0 ? <Box></Box> :
        <Box sx={{ display: "flex", alignContent: "center", justifyContent: "center", width: "100%" }}>
            <Box sx={{ width: "100%", mt: "15px" }}>
                <AutoPlaySwipeableViews
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((img) => (
                        <Box key={img} sx={{display: "flex", justifyContent: "center"}}>
                            <Box
                                component="img"
                                src={img}
                                sx={{ height:"250px", maxWidth: "100%"}}
                                alt={'product'}
                            />
                        </Box>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>

                            Back
                        </Button>
                    }
                />
            </Box>
        </Box>
    );
}

export default ModalImageCarrusel;
