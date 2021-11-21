import React from 'react'

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { IListItemProps } from "../../types/ListItem"
import "./ListItem.css"
export default function ListItems(props: IListItemProps) {

    return (
        <div>
            <ListItem alignItems="flex-start">
                <ListItemAvatar >
                    <Avatar classes={{ root: props.loading ? "skeleton" : "" }} alt="Remy Sharp" src={!props.loading ? props.image : ""} />
                </ListItemAvatar>
                <ListItemText
                    sx={{ fontWeight: "large", display: 'block' }}
                    primary={props.loading ? "" : `${props.name && props.name.title} ${props.name && props.name.first} ${props.name && props.name.last}`}
                    classes={{ root: props.loading ? "skeleton skeleton-text" : "" }}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color='success.dark'
                                classes={{ root: props.loading ? "skeleton skeleton-text" : "" }}
                            >
                                {!props.loading && `Phone No.: ${props.phone}`}
                            </Typography>
                            <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color='success.dark'
                                classes={{ root: props.loading ? "skeleton skeleton-text" : "" }}
                            >
                                {!props.loading && `EmailId: ${props.email}`}

                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>

        </div>
    )
}
