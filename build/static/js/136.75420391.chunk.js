(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[136],{2046:function(e,a,t){"use strict";t.r(a);var n=t(12),l=t(13),o=t(15),c=t(14),r=t(0),s=t.n(r),i=t(1242),m=t(1243),d=t(794),u=t(1244),g=t(1245),p=t(1246),h=t(800),E=t(783),b=t(784),M=t(1247),f=t(802),v=t(803),k=t(180),C=t(1006),y=t(990),T=t(991),N=t(992),O=t(3),B=t.n(O),F=t(204),S=t(311),w=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\n  import React from "react"\n  import {\n    Button,\n    Modal,\n    ModalHeader,\n    ModalBody,\n    ModalFooter,\n  } from "reactstrap"\n\n  class ModalBasic extends React.Component {\n\n    state = {\n      modal: false\n    }\n\n    toggleModal = () => {\n      this.setState(prevState => ({\n        modal: !prevState.modal\n      }))\n    }\n\n    render() {\n      return(\n        <Button\n        color="primary"\n        className="btn-block"\n        size="lg"\n        outline\n        onClick={this.toggleModal}\n      >\n        <Modal\n          isOpen={this.state.modal}\n          toggle={this.toggleModal}\n          className={this.props.className}\n        >\n          <ModalHeader toggle={this.toggleModal}>\n            Basic Modal\n          </ModalHeader>\n          <ModalBody>\n            <h5>Check First Paragraph</h5>\n            Oat cake ice cream candy chocolate cake chocolate cake\n            cotton candy drag\xe9e apple pie. Brownie carrot cake candy\n            canes bonbon fruitcake topping halvah. Cake sweet roll cake\n            cheesecake cookie chocolate cake liquorice.\n          </ModalBody>\n          <ModalFooter>\n            <Button color="primary" onClick={this.toggleModal}>\n              Accept\n            </Button>{" "}\n          </ModalFooter>\n        </Modal>\n      )\n    }\n  }\n  export default ModalBasic\n  ')),j=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\n  import React from "react"\n  import {\n    Button,\n    Modal,\n    ModalHeader,\n    ModalBody,\n    ModalFooter,\n  } from "reactstrap"\n\n  class ModalBasic extends React.Component {\n\n    state = {\n      modal: false\n    }\n\n    toggleModal = () => {\n      this.setState(prevState => ({\n        modal: !prevState.modal\n      }))\n    }\n\n    render() {\n      return(\n        <Button\n        color="primary"\n        className="btn-block"\n        size="lg"\n        outline\n        onClick={this.toggleModal}\n      >\n        Launch Modal\n      </Button>\n      <Modal\n        isOpen={this.state.modal}\n        toggle={this.toggleModal}\n        className="modal-dialog-centered"\n      >\n        <ModalHeader toggle={this.toggleModal}>\n          Vertically Centered\n        </ModalHeader>\n        <ModalBody className="modal-dialog-centered">\n          Oat cake ice cream candy chocolate cake chocolate cake\n          cotton candy drag\xe9e apple pie. Brownie carrot cake candy\n          canes bonbon fruitcake topping halvah. Cake sweet roll cake\n          cheesecake cookie chocolate cake liquorice.\n        </ModalBody>\n        <ModalFooter>\n          <Button color="primary" onClick={this.toggleModal}>\n            Accept\n          </Button>{" "}\n        </ModalFooter>\n      </Modal>\n      )\n    }\n  }\n  export default ModalBasic\n  ')),A=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\n  import React from "react"\n  import {\n    Button,\n    Modal,\n    ModalHeader,\n    ModalBody,\n    ModalFooter,\n  } from "reactstrap"\n\n  class modalBackdrop extends React.Component {\n\n    state = {\n      modal: false\n    }\n\n    toggleModal = () => {\n      this.setState(prevState => ({\n        modal: !prevState.modal\n      }))\n    }\n\n    render() {\n      return(\n        <Button\n        color="primary"\n        className="btn-block"\n        size="lg"\n        outline\n        onClick={this.toggleModal}\n      >\n        Launch Modal\n      </Button>\n      <Modal\n        isOpen={this.state.modal}\n        toggle={this.toggleModal}\n        className="modal-dialog-centered"\n        backdrop={false}\n      >\n        <ModalHeader toggle={this.toggleModal}>\n          Vertically Centered\n        </ModalHeader>\n        <ModalBody className="modal-dialog-centered">\n          Candy oat cake topping topping chocolate cake. Icing pudding\n          jelly beans I love chocolate carrot cake wafer candy canes.\n          Biscuit croissant fruitcake bonbon souffl\xe9.\n        </ModalBody>\n        <ModalFooter>\n          <Button color="primary" onClick={this.toggleModal}>\n            Accept\n          </Button>{" "}\n        </ModalFooter>\n      </Modal>\n      )\n    }\n  }\n  export default modalBackdrop\n  ')),x=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\n  import React from "react"\n  import {\n    Button,\n    Modal,\n    ModalHeader,\n    ModalBody,\n    ModalFooter,\n  } from "reactstrap"\n\n  class modalFade extends React.Component {\n\n    state = {\n      modal: false\n    }\n\n    toggleModal = () => {\n      this.setState(prevState => ({\n        modal: !prevState.modal\n      }))\n    }\n\n    render() {\n      return(\n        <Button\n        color="primary"\n        className="btn-block"\n        size="lg"\n        outline\n        onClick={this.toggleModal}\n      >\n        Launch Modal\n      </Button>\n      <Modal\n        isOpen={this.state.modal}\n        toggle={this.toggleModal}\n        className="modal-dialog-centered"\n        fade={false}\n      >\n        <ModalHeader toggle={this.toggleModal}>\n          Vertically Centered\n        </ModalHeader>\n        <ModalBody className="modal-dialog-centered">\n          Candy oat cake topping topping chocolate cake. Icing pudding\n          jelly beans I love chocolate carrot cake wafer candy canes.\n          Biscuit croissant fruitcake bonbon souffl\xe9.\n        </ModalBody>\n        <ModalFooter>\n          <Button color="primary" onClick={this.toggleModal}>\n            Accept\n          </Button>{" "}\n        </ModalFooter>\n      </Modal>\n      )\n    }\n  }\n  export default modalFade\n  ')),I=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\n  import React from "react"\n  import {\n    Button,\n    Modal,\n    ModalHeader,\n    ModalBody,\n    ModalFooter,\n  } from "reactstrap"\n\n  class modalTheme extends React.Component {\n\n    state = {\n      modal: false\n    }\n\n    toggleModal = () => {\n      this.setState(prevState => ({\n        modal: !prevState.modal\n      }))\n    }\n\n    render() {\n      return(\n        <Button\n        color="primary"\n        className="btn-block"\n        size="lg"\n        outline\n        onClick={this.toggleModal}\n      >\n        Launch Modal\n      </Button>\n      <Modal\n        isOpen={this.state.modal}\n        toggle={this.toggleModal}\n        className="modal-dialog-centered"\n      >\n        <ModalHeader toggle={this.toggleModal} className="bg-primary">\n          Primary\n        </ModalHeader>\n        <ModalBody className="modal-dialog-centered">\n        Tart lemon drops macaroon oat cake chocolate toffee chocolate bar icing.\n        Pudding jelly beans carrot cake pastry gummies cheesecake lollipop.\n        I love cookie lollipop cake I love sweet gummi bears cupcake dessert.\n        </ModalBody>\n        <ModalFooter>\n          <Button color="primary" onClick={this.toggleModal}>\n            Accept\n          </Button>{" "}\n        </ModalFooter>\n      </Modal>\n      )\n    }\n  }\n  export default modalTheme\n  ')),L=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\n  import React from "react"\n  import {\n    Button,\n    Modal,\n    ModalHeader,\n    ModalBody,\n    ModalFooter,\n  } from "reactstrap"\n\n  class modalSizes extends React.Component {\n\n    state = {\n      modal: false\n    }\n\n    toggleModal = () => {\n      this.setState(prevState => ({\n        modal: !prevState.modal\n      }))\n    }\n\n    render() {\n      return(\n        <Button\n        color="warning"\n        outline\n        onClick={this.toggleModal}\n      >\n        Large Modal\n      </Button>\n      <Modal\n        isOpen={this.state.modal}\n        toggle={this.toggleModal}\n        className="modal-dialog-centered modal-lg"\n      >\n        <ModalHeader toggle={this.toggleModal} className="bg-primary">\n        Large Modal\n        </ModalHeader>\n        <ModalBody className="modal-dialog-centered">\n        Halvah powder wafer. Chupa chups pie topping carrot cake cake.\n        Tootsie roll sesame snaps jelly-o marshmallow marshmallow jelly jujubes candy.\n        Chupa chups cheesecake gingerbread chupa chups cake candy canes sweet roll.\n        </ModalBody>\n        <ModalFooter>\n          <Button color="primary" onClick={this.toggleModal}>\n            Accept\n          </Button>{" "}\n        </ModalFooter>\n      </Modal>\n      )\n    }\n  }\n  export default modalSizes\n  ')),z=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\n  import React from "react"\n  import {\n    Button,\n    Modal,\n    ModalHeader,\n    ModalBody,\n    ModalFooter,\n  } from "reactstrap"\n\n  class ModalForm extends React.Component {\n\n    state = {\n      modal: false\n    }\n\n    toggleModal = () => {\n      this.setState(prevState => ({\n        modal: !prevState.modal\n      }))\n    }\n\n    render() {\n      return(\n      <Button color="success" outline onClick={this.toggleModal}>\n        Launch Modal\n      </Button>\n      <Modal\n        isOpen={this.state.modal}\n        toggle={this.toggleModal}\n        className="modal-dialog-centered"\n      >\n        <ModalHeader toggle={this.toggleModal}>\n          Login Form\n        </ModalHeader>\n        <ModalBody>\n          <FormGroup>\n            <Label for="email">Email:</Label>\n            <Input\n              type="email"\n              id="email"\n              placeholder="Email Address"\n            />\n          </FormGroup>\n          <FormGroup>\n            <Label for="password">Password:</Label>\n            <Input\n              type="password"\n              id="password"\n              placeholder="Password"\n            />\n          </FormGroup>\n        </ModalBody>\n        <ModalFooter>\n          <Button color="primary" onClick={this.toggleModal}>\n            Login\n          </Button>{" "}\n        </ModalFooter>\n      </Modal>\n      )\n    }\n  }\n  export default ModalForm\n  ')),H=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\nimport React from \'react\'\nimport { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from \'reactstrap\'\n\nclass ModalExample extends React.Component {\n\n  state = {\n    modal: false,\n    unmountOnClose: true\n  }\n\n  toggleModal = () => {\n    this.setState(prevState => ({\n      modal: !prevState.modal\n    }))\n  }\n\n  changeUnmountOnClose = e => {\n    let value = e.target.value\n    this.setState({ unmountOnClose: JSON.parse(value) })\n  }\n\n    render() {\n        return (\n          <Form inline onSubmit={e => e.preventDefault()}>\n            <FormGroup>\n              <Label for="unmountOnClose">UnmountOnClose value</Label>{" "}\n              <Input\n                type="select"\n                name="unmountOnClose"\n                id="unmountOnClose"\n                onChange={this.changeUnmountOnClose}\n              >\n                <option value="true">true</option>\n                <option value="false">false</option>\n              </Input>\n            </FormGroup>{" "}\n            <Button color="success" outline onClick={this.toggleModal}>\n              Launch modal\n            </Button>\n          </Form>\n          <Modal\n            isOpen={this.state.modal}\n            toggle={this.toggleModal}\n            className={this.props.className}\n            unmountOnClose={this.state.unmountOnClose}\n          >\n            <ModalHeader toggle={this.toggleModal}>\n              Modal title\n            </ModalHeader>\n            <ModalBody>\n              <Input\n                type="textarea"\n                placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"\n                rows={5}\n              />\n            </ModalBody>\n            <ModalFooter>\n              <Button outline color="primary" onClick={this.toggleModal}>\n                Accept\n              </Button>{" "}\n            </ModalFooter>\n          </Modal>\n        )\n    }\n}\n\nexport default ModalExample\n        ')),R=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\nimport React from \'react\'\nimport { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from \'reactstrap\'\n\nclass ModalFocus extends React.Component {\n\n  state = {\n    modal: false,\n    focusAfterClose: true\n  }\n\n  toggleModal = () => {\n    this.setState(prevState => ({\n      modal: !prevState.modal\n    }))\n  }\n\n  handleSelectChange({ target: { value } }) {\n    this.setState({ focusAfterClose: JSON.parse(value) })\n  }\n\n    render() {\n        return (\n          <Form inline onSubmit={e => e.preventDefault()}>\n            <FormGroup>\n              <Label for="focusAfterClose" className="mr-1">\n                Focus After Close\n              </Label>{" "}\n              <Input\n                type="select"\n                name="focusAfterClose"\n                id="focusAfterClose"\n                onChange={this.handleSelectChange}\n              >\n                <option value="true">Yes</option>\n                <option value="fasle">No</option>\n              </Input>\n            </FormGroup>{" "}\n          <Button\n            color="success"\n            className="ml-1"\n            outline\n            onClick={this.toggleModal}\n          >\n            Launch modal\n          </Button>\n        </Form>\n        <Modal\n          isOpen={this.state.modal}\n          toggle={this.toggleModal}\n          className={this.props.className}\n          returnFocusAfterClose={this.state.focusAfterClose}\n        >\n          <ModalHeader toggle={this.toggleModal}>\n            Modal title\n          </ModalHeader>\n          <ModalBody>\n            <Input\n              type="textarea"\n              placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"\n              rows={5}\n            />\n          </ModalBody>\n          <ModalFooter>\n            <Button color="primary" outline onClick={this.toggleModal}>\n              Accept\n            </Button>{" "}\n          </ModalFooter>\n        </Modal>\n        )\n    }\n}\n\nexport default ModalFocus\n        ')),D=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={activeTab:"1",modal:!1},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e.toggleModal=function(){e.setState((function(e){return{modal:!e.modal}}))},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement(g.a,null,s.a.createElement(p.a,null,"Basic Modal"),s.a.createElement("div",{className:"views"},s.a.createElement(h.a,{tabs:!0},s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(F.a,{size:15}))),s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(S.a,{size:15})))))),s.a.createElement(M.a,null,s.a.createElement("p",null,"Use ",s.a.createElement("code",null,"Modal"),", ",s.a.createElement("code",null,"ModalBody")," and"," ",s.a.createElement("code",null,"ModalFooter")," tags to create a Modal with reactstrap."),s.a.createElement(f.a,{activeTab:this.state.activeTab},s.a.createElement(v.a,{tabId:"1"},s.a.createElement(k.a.Ripple,{color:"primary",className:"btn-block",size:"lg",outline:!0,block:!0,onClick:this.toggleModal},"Launch Modal"),s.a.createElement(C.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:this.props.className},s.a.createElement(y.a,{toggle:this.toggleModal},"Basic Modal"),s.a.createElement(T.a,null,s.a.createElement("h5",null,"Check First Paragraph"),"Oat cake ice cream candy chocolate cake chocolate cake cotton candy drag\xe9e apple pie. Brownie carrot cake candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake liquorice."),s.a.createElement(N.a,null,s.a.createElement(k.a,{color:"primary",onClick:this.toggleModal},"Accept")," "))),s.a.createElement(v.a,{className:"component-code",tabId:"2"},w)))))}}]),t}(s.a.Component),U=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={activeTab:"1",modal:!1},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e.toggleModal=function(){e.setState((function(e){return{modal:!e.modal}}))},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement(g.a,null,s.a.createElement(p.a,null,"Vertically Centered"),s.a.createElement("div",{className:"views"},s.a.createElement(h.a,{tabs:!0},s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(F.a,{size:15}))),s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(S.a,{size:15})))))),s.a.createElement(M.a,null,s.a.createElement("p",null,"Use class ",s.a.createElement("code",null,".modal-dialog-centered")," with"," ",s.a.createElement("code",null,"Modal")," tag to vertically center modal."),s.a.createElement(f.a,{activeTab:this.state.activeTab},s.a.createElement(v.a,{tabId:"1"},s.a.createElement(k.a.Ripple,{color:"primary",className:"btn-block",size:"lg",outline:!0,block:!0,onClick:this.toggleModal},"Launch Modal"),s.a.createElement(C.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:"modal-dialog-centered"},s.a.createElement(y.a,{toggle:this.toggleModal},"Vertically Centered"),s.a.createElement(T.a,null,"Oat cake ice cream candy chocolate cake chocolate cake cotton candy drag\xe9e apple pie. Brownie carrot cake candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake liquorice."),s.a.createElement(N.a,null,s.a.createElement(k.a,{color:"primary",onClick:this.toggleModal},"Accept")," "))),s.a.createElement(v.a,{className:"component-code",tabId:"2"},j)))))}}]),t}(s.a.Component),P=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={activeTab:"1",modal:!1},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e.toggleModal=function(){e.setState((function(e){return{modal:!e.modal}}))},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement(g.a,null,s.a.createElement(p.a,null,"Disabled Backdrop"),s.a.createElement("div",{className:"views"},s.a.createElement(h.a,{tabs:!0},s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(F.a,{size:15}))),s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(S.a,{size:15})))))),s.a.createElement(M.a,null,s.a.createElement("p",null,"Use ",s.a.createElement("code",null,"backdrop")," attribute to enable or disable modal backdrop."),s.a.createElement(f.a,{activeTab:this.state.activeTab},s.a.createElement(v.a,{tabId:"1"},s.a.createElement(k.a.Ripple,{color:"primary",className:"btn-block",size:"lg",outline:!0,block:!0,onClick:this.toggleModal},"Launch Modal"),s.a.createElement(C.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:"modal-dialog-centered",backdrop:!1},s.a.createElement(y.a,{toggle:this.toggleModal},"Disabled Backdrop"),s.a.createElement(T.a,null,"Candy oat cake topping topping chocolate cake. Icing pudding jelly beans I love chocolate carrot cake wafer candy canes. Biscuit croissant fruitcake bonbon souffl\xe9."),s.a.createElement(N.a,null,s.a.createElement(k.a,{color:"primary",onClick:this.toggleModal},"Accept")," "))),s.a.createElement(v.a,{className:"component-code",tabId:"2"},A)))))}}]),t}(s.a.Component),G=t(911),q=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={activeTab:"1",modal:!1},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e.toggleModal=function(){e.setState((function(e){return{modal:!e.modal}}))},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement(g.a,null,s.a.createElement(p.a,null,"Disabled Animation"),s.a.createElement("div",{className:"views"},s.a.createElement(h.a,{tabs:!0},s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(F.a,{size:15}))),s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(S.a,{size:15})))))),s.a.createElement(M.a,null,s.a.createElement("p",null,"Use ",s.a.createElement("code",null,"fade")," attribute to enable or disable modal fade."),s.a.createElement(f.a,{activeTab:this.state.activeTab},s.a.createElement(v.a,{tabId:"1"},s.a.createElement(k.a.Ripple,{color:"primary",className:"btn-block",size:"lg",block:!0,outline:!0,onClick:this.toggleModal},"Launch Modal"),s.a.createElement(C.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:"modal-dialog-centered",fade:!1},s.a.createElement(y.a,{toggle:this.toggleModal},"Disabled Fade"),s.a.createElement(T.a,null,"Chocolate bar jelly drag\xe9e cupcake chocolate bar I love donut liquorice. Powder I love marzipan donut candy canes jelly-o. Drag\xe9e liquorice apple pie candy biscuit danish lemon drops sugar plum.",s.a.createElement(G.a,{className:"mt-1",color:"success"},s.a.createElement("span",null,"Well done! You successfully read this important alert message."))),s.a.createElement(N.a,null,s.a.createElement(k.a,{color:"primary",onClick:this.toggleModal},"Accept")," "))),s.a.createElement(v.a,{className:"component-code",tabId:"2"},x)))))}}]),t}(s.a.Component),J=[{id:1,title:"Primary",bgColor:"bg-primary",btnColor:"primary"},{id:2,title:"Success",bgColor:"bg-success",btnColor:"success"},{id:3,title:"Info",bgColor:"bg-info",btnColor:"info"},{id:4,title:"Danger",bgColor:"bg-danger",btnColor:"danger"},{id:5,title:"Warning",bgColor:"bg-warning",btnColor:"warning"},{id:6,title:"Dark",bgColor:"bg-dark",btnColor:"dark"}],W=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={activeTab:"1",modal:null},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e.toggleModal=function(a){e.state.modal!==a?e.setState({modal:a}):e.setState({modal:null})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=J.map((function(a){return s.a.createElement(s.a.Fragment,{key:a.id},s.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},s.a.createElement(k.a.Ripple,{color:a.btnColor,onClick:function(){return e.toggleModal(a.id)},key:a.title,outline:!0},a.title)),s.a.createElement(C.a,{isOpen:e.state.modal===a.id,toggle:function(){return e.toggleModal(a.id)},className:"modal-dialog-centered",key:a.id},s.a.createElement(y.a,{toggle:function(){return e.toggleModal(a.id)},className:a.bgColor},a.title),s.a.createElement(T.a,null,"Tart lemon drops macaroon oat cake chocolate toffee chocolate bar icing. Pudding jelly beans carrot cake pastry gummies cheesecake lollipop. I love cookie lollipop cake I love sweet gummi bears cupcake dessert."),s.a.createElement(N.a,null,s.a.createElement(k.a,{color:a.btnColor,onClick:function(){return e.toggleModal(a.id)}},"Accept"))))}));return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement(g.a,null,s.a.createElement(p.a,null,"Modal Themes"),s.a.createElement("div",{className:"views"},s.a.createElement(h.a,{tabs:!0},s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(F.a,{size:15}))),s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(S.a,{size:15})))))),s.a.createElement(M.a,null,s.a.createElement("p",null,"Use class ",s.a.createElement("code",null,".bg-*")," with ",s.a.createElement("code",null,"ModalHeader")," to change modal theme."),s.a.createElement(f.a,{activeTab:this.state.activeTab},s.a.createElement(v.a,{tabId:"1"},a),s.a.createElement(v.a,{className:"component-code",tabId:"2"},I)))))}}]),t}(s.a.Component),V=[{id:1,btnTitle:"Extra Small",modalTitle:"Extra Small modal",modalClass:"modal-xs"},{id:2,btnTitle:"Small Modal",modalTitle:"Small Modal",modalClass:"modal-sm"},{id:3,btnTitle:"Default Modal",modalTitle:"Default Modal",modalClass:""},{id:4,btnTitle:"Large Modal",modalTitle:"Large Modal",modalClass:"modal-lg"},{id:5,btnTitle:"Extra Large Modal",modalTitle:"Extra Large Modal",modalClass:"modal-xl"}],Y=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={activeTab:"1",modal:null},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e.toggleModal=function(a){e.state.modal!==a?e.setState({modal:a}):e.setState({modal:null})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=V.map((function(a){return s.a.createElement(s.a.Fragment,{key:a.id},s.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},s.a.createElement(k.a.Ripple,{color:"warning",onClick:function(){return e.toggleModal(a.id)},key:a.title,outline:!0},a.btnTitle)),s.a.createElement(C.a,{isOpen:e.state.modal===a.id,toggle:function(){return e.toggleModal(a.id)},className:"modal-dialog-centered ".concat(a.modalClass),key:a.id},s.a.createElement(y.a,{toggle:function(){return e.toggleModal(a.id)}},a.modalTitle,a.title),s.a.createElement(T.a,null,"Halvah powder wafer. Chupa chups pie topping carrot cake cake. Tootsie roll sesame snaps jelly-o marshmallow marshmallow jelly jujubes candy. Chupa chups cheesecake gingerbread chupa chups cake candy canes sweet roll."),s.a.createElement(N.a,null,s.a.createElement(k.a,{color:"primary",onClick:function(){return e.toggleModal(a.id)},outline:!0},"Accept"))))}));return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement(g.a,null,s.a.createElement(p.a,null,"Modal Sizes"),s.a.createElement("div",{className:"views"},s.a.createElement(h.a,{tabs:!0},s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(F.a,{size:15}))),s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(S.a,{size:15})))))),s.a.createElement(M.a,null,s.a.createElement("p",null,"Use class ",s.a.createElement("code",null,".modal-[xs/sm/lg/xl]")," with"," ",s.a.createElement("code",null,"ModalHeader")," to change modal Size."),s.a.createElement(f.a,{activeTab:this.state.activeTab},s.a.createElement(v.a,{tabId:"1"},a),s.a.createElement(v.a,{className:"component-code",tabId:"2"},L)))))}}]),t}(s.a.Component),K=t(806),Q=t(811),X=t(799),Z=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={activeTab:"1",modal:!1},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e.toggleModal=function(){e.setState((function(e){return{modal:!e.modal}}))},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement(g.a,null,s.a.createElement(p.a,null,"Form Components"),s.a.createElement("div",{className:"views"},s.a.createElement(h.a,{tabs:!0},s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(F.a,{size:15}))),s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(S.a,{size:15})))))),s.a.createElement(M.a,null,s.a.createElement("h5",null,"Login Form"),s.a.createElement("p",null,"Created Simple Login Form."),s.a.createElement(f.a,{activeTab:this.state.activeTab},s.a.createElement(v.a,{tabId:"1"},s.a.createElement(k.a.Ripple,{color:"success",outline:!0,onClick:this.toggleModal},"Launch Modal"),s.a.createElement(C.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:"modal-dialog-centered"},s.a.createElement(y.a,{toggle:this.toggleModal},"Login Form"),s.a.createElement(T.a,null,s.a.createElement(K.a,null,s.a.createElement(Q.a,{for:"email"},"Email:"),s.a.createElement(X.a,{type:"email",id:"email",placeholder:"Email Address"})),s.a.createElement(K.a,null,s.a.createElement(Q.a,{for:"password"},"Password:"),s.a.createElement(X.a,{type:"password",id:"password",placeholder:"Password"}))),s.a.createElement(N.a,null,s.a.createElement(k.a,{color:"primary",onClick:this.toggleModal},"Login")," "))),s.a.createElement(v.a,{className:"component-code",tabId:"2"},z)))))}}]),t}(s.a.Component),$=t(816),_=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={activeTab:"1",modal:!1,unmountOnClose:!0},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e.toggleModal=function(){e.setState((function(e){return{modal:!e.modal}}))},e.changeUnmountOnClose=function(a){var t=a.target.value;e.setState({unmountOnClose:JSON.parse(t)})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement(g.a,null,s.a.createElement(p.a,null,"Unmount On Close"),s.a.createElement("div",{className:"views"},s.a.createElement(h.a,{tabs:!0},s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(F.a,{size:15}))),s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(S.a,{size:15})))))),s.a.createElement(M.a,null,s.a.createElement("p",null,"Write something (data should remain in modal if unmountOnClose is set to false)."),s.a.createElement(f.a,{activeTab:this.state.activeTab},s.a.createElement(v.a,{tabId:"1"},s.a.createElement($.a,{inline:!0,onSubmit:function(e){return e.preventDefault()}},s.a.createElement(K.a,null,s.a.createElement(Q.a,{for:"unmountOnClose",className:"mr-1"},"UnmountOnClose value")," ",s.a.createElement(X.a,{type:"select",name:"unmountOnClose",id:"unmountOnClose",onChange:this.changeUnmountOnClose},s.a.createElement("option",{value:"true"},"true"),s.a.createElement("option",{value:"false"},"false")))," ",s.a.createElement(k.a.Ripple,{color:"success",className:"ml-1",outline:!0,onClick:this.toggleModal},"Launch modal")),s.a.createElement(C.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:this.props.className,unmountOnClose:this.state.unmountOnClose},s.a.createElement(y.a,{toggle:this.toggleModal},"Modal title"),s.a.createElement(T.a,null,s.a.createElement(X.a,{type:"textarea",placeholder:"Write something (data should remain in modal if unmountOnClose is set to false)",rows:5})),s.a.createElement(N.a,null,s.a.createElement(k.a,{color:"primary",outline:!0,onClick:this.toggleModal},"Accept")," "))),s.a.createElement(v.a,{className:"component-code",tabId:"2"},H)))))}}]),t}(s.a.Component),ee=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={activeTab:"1",modal:!1,focusAfterClose:!0},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e.toggleModal=function(){e.setState((function(e){return{modal:!e.modal}}))},e.handleSelectChange=function(a){var t=a.target.value;e.setState({focusAfterClose:JSON.parse(t)}),!0===e.state.focusAfterClose&&alert("true")},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement(g.a,null,s.a.createElement(p.a,null,"Focus After Close"),s.a.createElement("div",{className:"views"},s.a.createElement(h.a,{tabs:!0},s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(F.a,{size:15}))),s.a.createElement(E.a,null,s.a.createElement(b.a,{className:B()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(S.a,{size:15})))))),s.a.createElement(M.a,null,s.a.createElement("p",null,"Observe the button. It will be focused after close."),s.a.createElement(f.a,{activeTab:this.state.activeTab},s.a.createElement(v.a,{tabId:"1"},s.a.createElement($.a,{inline:!0,onSubmit:function(e){return e.preventDefault()},className:"demo-modal-form"},s.a.createElement(K.a,null,s.a.createElement(Q.a,{for:"focusAfterClose",className:"mr-1"},"Focus After Close")," ",s.a.createElement(X.a,{type:"select",name:"focusAfterClose",id:"focusAfterClose",onChange:this.handleSelectChange},s.a.createElement("option",{value:"true"},"Yes"),s.a.createElement("option",{value:"fasle"},"No")))," ",s.a.createElement(k.a.Ripple,{color:"success",className:"ml-1",outline:!0,onClick:this.toggleModal},"Launch modal")),s.a.createElement(C.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:this.props.className,returnFocusAfterClose:this.state.focusAfterClose},s.a.createElement(y.a,{toggle:this.toggleModal},"Modal title"),s.a.createElement(T.a,null,s.a.createElement(X.a,{type:"textarea",placeholder:"Observe the button. It will be focused after close.",rows:5})),s.a.createElement(N.a,null,s.a.createElement(k.a,{color:"primary",outline:!0,onClick:this.toggleModal},"Accept")," "))),s.a.createElement(v.a,{className:"component-code",tabId:"2"},R)))))}}]),t}(s.a.Component),ae=t(796),te=t.n(ae),ne=(t(795),function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){te.a.highlightAll()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{breadCrumbTitle:"Modal",breadCrumbParent:"Components",breadCrumbActive:"Modal"}),s.a.createElement(i.a,null,s.a.createElement(m.a,{lg:"3",md:"6",sm:"12"},s.a.createElement(D,null)),s.a.createElement(m.a,{lg:"3",md:"6",sm:"12"},s.a.createElement(U,null)),s.a.createElement(m.a,{lg:"3",md:"6",sm:"12"},s.a.createElement(P,null)),s.a.createElement(m.a,{lg:"3",md:"6",sm:"12"},s.a.createElement(q,null))),s.a.createElement(i.a,null,s.a.createElement(m.a,{sm:"12"},s.a.createElement(W,null)),s.a.createElement(m.a,{sm:"12"},s.a.createElement(Y,null))),s.a.createElement(i.a,null,s.a.createElement(m.a,{lg:"4",md:"6",sm:"12"},s.a.createElement(_,null)),s.a.createElement(m.a,{lg:"4",md:"6",sm:"12"},s.a.createElement(Z,null)),s.a.createElement(m.a,{lg:"4",md:"6",sm:"12"},s.a.createElement(ee,null))))}}]),t}(s.a.Component));a.default=ne}}]);
//# sourceMappingURL=136.75420391.chunk.js.map