import React from "react";
import '../../styles/data_object.scss';

export default class DataObject extends React.Component {
    state = {
        value: null,
        softwareType: null,
        editing: true
    };

    setEditing = () => this.setState({
        editing: !this.state.editing
    })

    updateValue = (value: any) => {
        this.setState({value: value});
    }

    componentDidMount() {

    }

    render = () => {
        const {editing, value} = this.state;

        return (
            <div className="data__object">
                {editing ? (
                    <EditDataObject 
                        value={value}
                        updateValue={this.updateValue}
                    /> ) : <ViewDataObject value={value} />
                }
            </div>
        );
    }
}

export const EditDataObject = ({value, updateValue}: {value: any; updateValue: any;}) => {
    return (
        <>
            <input 
                className="data__object--common"
                value={value} 
            />
        </>
    )
}

export const ViewDataObject = ({value}: {value?: any;}) => {
    return (
        <>
            <span className="data__object--common">test</span>
        </>
    )
}