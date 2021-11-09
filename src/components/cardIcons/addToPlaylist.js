import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlayListAddIcon from '@material-ui/icons/PlaylistAdd'

const AddToPlaylistIcon = ({movie}) => {

    const context = useContext(MoviesContext);

    
    return (
      <IconButton aria-label="add to favorites">
        <PlayListAddIcon color="primary" fontSize="large" />
      </IconButton>
    );
};

export default AddToPlaylistIcon;