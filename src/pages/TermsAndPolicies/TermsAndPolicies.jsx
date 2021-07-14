import React, { useState } from 'react';
import RichTextEditor from 'react-rte';
import classes from "./termsandpolicies.module.css";
import { SaveOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { message, Radio } from 'antd';
import { useHistory } from "react-router-dom";


function TermsAndPolicies() {

    const history = useHistory();
    const [value, setValue] = useState(RichTextEditor.createEmptyValue());


    const onSave = () => {
        message.success("Application saved!!", 2)
    }

    return (
        <>
            <div className={classes.header}>
                <div
                    onClick={() => history.goBack()}
                    style={{ cursor: "pointer" }}
                >
                    <ArrowLeftOutlined /> {"Terms and Policies"}
                </div>
                <div>
                    <button
                        onClick={onSave}
                        className={classes.primary_btn}
                    >
                        <SaveOutlined /> Save
                    </button>
                </div>
            </div>

            <div className={classes.comments}>
                <div className={classes.rte}>
                    <div className={classes.editor}>
                        <h2 style={{ fontWeight: "bold" }}>Terms</h2>
                        <RichTextEditor
                            value={value}
                        // onChange={this.onChange}
                        />
                    </div>

                    <div className={classes.editor}>
                        <h2 style={{ fontWeight: "bold" }}>Policies</h2>
                        <RichTextEditor
                            value={value}
                        // onChange={this.onChange}
                        />
                    </div>

                    <div className={classes.editor}>
                        <h2 style={{ fontWeight: "bold" }}>Required Signature?</h2>
                        <Radio.Group name="radiogroup" defaultValue={1}>
                            <Radio value={1}>Enabled</Radio>
                            <Radio value={2}>Disabled</Radio>
                        </Radio.Group>

                    </div>

                </div>
                <div>Right</div>
            </div>


        </>
    )
}

export default TermsAndPolicies;