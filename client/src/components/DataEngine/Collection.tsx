import React from "react";
import DataObject from "./DataObject";

const defaultProps = {
    objects: null,
    orderedObjects: null,
    parent: false
}

export interface CollectionState {
    objects: any;
    orderedObjects: any;
    functions: any;
};

export interface CollectionProps {
    dedup?: boolean;
    atomic?: boolean;
    sequential?: boolean;
    finite?: boolean;
};

export default class Collection extends React.Component<CollectionProps, CollectionState> {
    state = {
        objects: null,
        orderedObjects: null,
        name: null,
        functions: null,
        parent: null
    };

    componentDidMount() {

    }

    componentDidUpdate(prevProps: any, prevState: any) {
        parseIncomingProps(this.setState, defaultProps, this.props);
    }

    render = () => {
        // let {objects} = this.state;
        // console.log("test: help", objects)

        return (
            <div className="collection">
                <DataObject  />
            </div>
        );
    }
}