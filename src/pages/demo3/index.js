import React from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { saveInput, addItem, deleteItem } from "./store/action-creator";
const TodoList = props => {
  let { inputValue, inputChange, clickButton, list, clickList } = props; // 粘贴过来后，此处要进行修改
  return (
    <div style={{ margin: "10px" }}>
      <div>
        <Input
          style={{ width: "250px", marginRight: "10px" }}
          value={inputValue}
          onChange={inputChange}
        />
        <Button
          type="primary"
          onClick={() => {
            clickButton(list, inputValue);
          }}
        >
          提交
        </Button>
      </div>
      <div style={{ margin: "10px", width: "300px" }}>
        <List
        bordered
        dataSource={list}
        renderItem={
            (item,index)=>(
                <List.Item  onClick={()=>{clickList(list,index)}}>
                    {item}
                </List.Item>
            )
        }
        />
      </div>
    </div>
  );
};

const stateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      dispatch(saveInput(e.target.value));
    },
    clickButton(list, inputValue) {
      const newList = [...list];
      newList.push(inputValue);
      dispatch(addItem(newList));
    },
    clickList(list, index) {
      const newList = [...list];
      newList.splice(index, 1);
      dispatch(deleteItem(newList));
    }
  };
};
export default connect(
  stateToProps,
  dispatchToProps
)(TodoList);
