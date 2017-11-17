import React, {Component} from 'react';
import './stylesheets/RequestForm.css';

class RequestForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="request_form">
        <table>
          <tr>
            <td>FROM:</td>
            <td>
              <input type="text" />
            </td>

            <td>TO:</td>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr>
            <td>AMOUNT:</td>
            <td>
              <div>
              <input type="number"/>
              <input type="checkbox" id="split_money" data-toggle="collapse" data-target="#split_information" name="split_money" value="split_money" />
              <label for="split_money">Split money?</label>
              </div>
            </td>

            <td>
                <div id="split_information" class="collapse">
                  ACCEPT AMOUNT:
                  <input type="number" />
                </div>
            </td>
          </tr>
        </table>

        <input type="submit" />
      </div>
    );
  }
}

export default RequestForm;
