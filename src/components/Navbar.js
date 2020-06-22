import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigator(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img
          style={{ maxWidth: "130px" }}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAAA5CAYAAAAGPo+oAAANiUlEQVR42u2dC3BcVRnHE+uDVqyCILRNk+wjaSG0IAg6zABRwReioxiRNrl7bxIChaljFUUd0LU22XvuplumUpz6qujUqR0Vp74GFREUFBGdcaqOFQfE4Vl5jVqLfcTvu7ub7N7ck/3OnnN3c5dvZ84wwzT3nj3nfL8953++R1u37Z2RtMVjlNY2sHtBW0Sfk4byL6f2o9ueWFnreemM2wf/9ii0qRrtIIzByW2N+sAYJmzxN0K/phIZ9/yougF9+Cq84+nazf1jlPNe1SfHvZYyLs1sXUPilFrfA8bsNtpa9oajHE94/k3EfuRozxMP0+xTvCF8gi1xDnWg+7PZF0c1MCuGxSvok+6uog2OP+mUZ2YbxZqE7Q0Q+3R/VH3oHZs8ASFLHu+MezHDhg6bhCN+R3lWyvbWRwybnbT59W4mPS8jDlGe1+14F7zgYAOT+TbiM5/strPHNMagxD2kXY3jDkbVh1TG/ZiakXl7GDYMG4bNnJ+pdjwGEA1qOGpjStq5s4nf8dG+gexLo+kFjonYp2hkhxMjk10MG4YNw2bOY4t7BfGosLetH77fwMCCtmz2RZHsKBzxTdKuxhY3+P0IawALrQU4nL+wTkPLMmzEVOfayVOLc1DZGDbGYQNAWJEazKXLLZ3xUk2BDWgIlf3AdtbY9peECsXrt74M/uZx4uTbSWuiFyapx7QoijsD4mT9t8eZeL3fj5Cme9xL2WJ3XYaWAfHP2tyLcx7VLicWOxvLfXtwToJrjwwbS2wMruP02uzihsPG8nYG+9F7efaEemEDm4E1s74X2KESbHpGxSlVA41G2QzYOBPvrDXhgZuXjcQdxc/Lz+sYKRxv9ldGbKZpNWKXDDQpZ9NynT6knYkTlYTh4C+Wnbuq3JelY9sXMWw0YZNxPztrnsfcVzZ+ZyO+EewHrpV6YYN6Y+iP5AsBNqmh/Gtwx0B49tHyYuodziXhT9sNfrdnKe+HMX2HDDag4xyrt/jcj+sYGtyk3VHuy/JhsZRhw7Bh2IQb2g7as2cG3tSWNul4G4g7q7tkoOkazSe0heGM+KumsR3ptvP903Pfb1bDY9gwbFoCNqmR/Gk0Jz/vQC+OCTzTiDah4MQHZ+dhuVaz5VV6/j3iIhPGBoL7TVEdNRk2DJuWgE1JN/kp8R2bpw1qQ2GhnpGTnfj2JQbFilCtZiSX1r0hg53dtwwZ3JNpZ/JU7Fdn8ahp7INHs5TjnlvVwLhTTu6ymg0Nl9b//5GeJ2kJa3w1w4ZhUxs2cItFWwTiCT/cwYA2QXbiy7jXy3Y1YROv8sFwDDQyY7/wjruu3DcMM4ny+nalNfFq2bhUAdkSGaJhPU95nkpj2DBsQnUL8HX5E834xUfUnl2/Ex+86+mwX0zd989oRuITxLE9StSW7oxSKGbYMGxaADb+Ueoq4nv2Ti9kuM2K2Ilvm1QYHtuyRFsYtsUDtHH1bqYKxV3W+BvLa6C/PzpnT4YNwya2sFk6ll0Eg7af6pxU1EwKypoJ2Ykv4x4CXec8uTC8Q8uJr9tx30rdXaVGxlFE/4MqIPsMC8UMG4ZNS8Cm6EXrjhNh8+Py8zvX5Y6LwokP3nGrfCG7nfrX7u53iLdMX/Bv4Gz3k8QFuj8qobjqA7sm9D6t1chBtyGwQQGe8g5ZC/pjMWwYNlW3HvCc5ynHhaSVu7DCoNoVvsuzxO/zXhls8DkNEoaP+lfjCJvBjacDAJ+j7Ya8axolFNcW/8Wb64YNuNObvcJn2DBsqnY34mvEW6JbVI1fwYnvXhloOg14MKcc73piiMQ91fPq7lR1QoxaKGbYMGxiC5uElV9NNKh/pzK5s8jHGgUnvm4UqyWw6RjJ6ukgoDHBOx4kjumHKt+dGHIvId9elXZ+UQvFDBuGTWxhU3K4u4MYwjBBjbqmOvHBTdU/MDdKKGz8qPMBrahzdIZTEoZn9UH8njgfny//DYq5DBuGDcMmbFFkxLtoqSfcR8rfvdZVNNWJL3ShaV61BwTqW4kL7UvhwBPXzSuhmGHDsIkzbIo+KN6fSQNouetrvYucic9x/5Ue9M6cI7pbK0tf1+D4EqrHcFisT0m3WVVKeq40Ns0Sihk2DJt5Dhvc3bjXUBOQ1wofoDrxSXcTmNrC2rRM3/C8TxEXxa9l/UDBF67BtxLh+QuT/WfYMGxaEjbo5AeC7j+J+VwGZIGRCpn4DncN5d4kM3LsjwFh+CGij8+HZf3AHYqvKdFCGODqfPwiU+EVDBuGTUvCpqRvuMRJ+Z4s5QPViQ92Pz+UGbiJlBbUYFMA7DNJe+OqOa7dy9/rl8Tr8+3NFIoZNgybWMCm1yosozj5gaB8uHvIuyCYzErFiQ+Obe+XRnev3brYwALbQ9zVfFnWj0pYAJSGiEmz95cj5ZshFDNsGDaxgI3KxJTd+rGdWErTSXXi8+OOZKDxk8frVU5Ij4oOPKYRS9dI049WVtHARQL//imS31BGfLBZQjHDhmETG9j4jnu0HcFzPfb4Gf6EgHErZeILOM/JdhMax8FPExfXvSoCNfzNFuLY3N0soZhhw7CJDWxKRnUXtYbSzBjk1xAN8fGyP0q4E59m6Rj4e6owXJmrJ0wYDj4aa6vThWLRFKGYYcOwiRVsUlb+PcQ+POQbIL7bEffRHAOFJxWGR288SXuB27QQA6owHALiO4kg+2IzhGKGDcMmVrApXRs/QLtVcq9MZnKXEvWRA0l78mypXlNMU6C7K/s+scDfjnqOcn5uH8XwB5PlcBg2DJvWgo2v3YDISdsh/Mq/xqYZ+NflN1Cg+2h+lIRhvBqvI/0oejVjsnNVbUq31hXDhmHTsrAp9eMZYl8oBn6kUsegaCTKi8pxP0NcVPfpeC4DXCepIJ55bmEZw4Zhw7CR7m68vKlKBBDEebs85WeuW7uzRWH470QIfFSn2iZez5OF4kzuLY0Uihk2DJtYwqZ0LDFS+iRtzR54kwsr7bjvpl7Z+1n4wnY1CtoKCOI/U43/CitSz7Bh2DBspm93xC5t2GTEX2SF53wnPs3CcyVh+AeqGQd1fHxgp/YB6q1XI4Vihg3DJrawSQ6L1xnY2Vwn1Ugun9T+tU85m5eTheGR/MUm6lKVhOInaIs4t2HmmLbtWIYNw+YcFePBc3+gDZlp7hXzCTalXcPd9dfExkjycH8WP4VmVj+FZoJecvZ+kyktEugzpJhjOWqhOJawsd3vBu0JSu9cacymiInc5its5kdrEGxgst6nIQzfKBeGvZN1+4awAkfBR0h9scQNOsLwbJ0IPKGJOYr9ulUNEIrjCJt50xg2zYeNYtxT1YJOOZvOlcMme4xu1xS8nf1dVmXZlXqE4en3juRP83dK9LH4ismjI8OGYdOasGlTiuiuOIuL3dL8ws6m5YYE7B+pj523pzINqMotUakGlUustxUaHhGlUMywYdjEHjaKBeeKg42lUGTHlqv1hVL0z/EL6NU3fkeheuTtmDe4r8ZxDh0Oi5UmIfeNLQ7WrV9VBH6a+P4MG4ZNS8KmOMhugd63mXy8wVaZcEvvFkpsMjSWR0olW76dxNrdsHOBXdnn8No/hV7AhnyNYEf1G5PhGQwbhk3Lwga3/wqwWSetcrlGrV64rjA8vxb0TExWJDeHDBuGTSvABqOyFfoXWrs7LEl6fUblXRq7+QpEm/eOmReKGTYMG4ZNjfIv6r4/7m2xhE1FuEQxBapZoZhhw7Bh2BjsX9dQPqEhDDe9wSK8tjweKLwzbBg2cwl9D0fVsPZ1q8IGC74ZMqgJ4pHlUIOPSLT3ZbzfTi/mUbNCcRxhg4nGorQpEPr/0zqxUQZb2sq9tlVho114Dj74/eDZjxL7cDVWOgCARywkewew2oSfToIKnIoYLd0ywy0ZG2WyUcv6MGxaBzYmjEohdOKx8jxhFYiEf5XtPWUYNAegP7vguedNGyzRyTDheLdEIRQzbBg2DBtDsIGdw0+IMVlbZ/n3QBldcM6zfSDoHbH2YpyVP1dBg7VEpj6heKqdYcOwYdjME9hQM+RhxU6IBD9/znEe9M5EMPiBohlIhAU5d7DMTDEpu380OgiOfZhCYh86KMK5fxvU1BrrxXUyx3P9vD22eFA19YYpoZhhEwPY4C9Lx0BhYVUbKRyfsMZXB5sstaW5NrEy2ML6EZaQKurUk+iQV9mWQcKp5BDkvAk03EWYhg3+ffD95Za8DN5RerdfaE++8HpqLU5Zoi9qSwy6p4eNSbBVZgw0JhSDD1NwHS+FwM9Zazgk7Ydp2OCPU7AvYWs5bK2gA6kpe0qNFNJBe8KEZsF+hNUzC4MNAqNqfC/JLgqzz+kyR5Tg444NhYVEcvZEaeB+fl3iQm9kQbTy4qb2zaQQWv2Zavd3PYQ+oEiNuwgMmYjy1xQNF3+sioJ2bcBFOT4Y20Xtc9TLxY9no4yhweRZYR+8GSWdNGh+Ye3UdcGwiTls4Bd0MW2iKxKrT0219wEM/BAMk8dggJ6/QAcGFkS0sBk2DBuGTbNgk7TcTsr7JTFZ7WiM/uIj7kDCM/0VlhV1l9lCL9XYTQrFDBuGDcMmCtGaOkcVu43w01hRt+tclzuua2zLEoQYeiuXj2j4X997Gf4/LlY8Jvm+Q4RYL+qxzbRHMcNm/sHm/3QPIpjfDfERAAAAAElFTkSuQmCC"
          alt="logo"
        ></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link className="mx-2" href="#features">
            <i className="fa fa-home"></i> Home
          </Nav.Link>
          <Nav.Link className="mx-2" href="#pricing">
            <i className="fa fa-shopping-basket"></i> Shop
          </Nav.Link>
          <Nav.Link className="mx-2" href="#pricing">
            <i className="fa fa-newspaper-o"></i> Blog
          </Nav.Link>
          <Nav.Link className="mx-2" href="#pricing">
            <i className="fa fa-address-card"></i> Contact Us
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="">
            <i className="fa fa-cart-arrow-down" style={{ fontSize: "22px" }} />{" "}
            Cart{" "}
            <span className="badge badge-pill badge-danger">
              {props.TotalItems}
            </span>
          </Nav.Link>
          <Nav.Link href="">
            <i className="fa fa-user-circle-o" style={{ fontSize: "22px" }} />
            {props.UserName}{" "}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigator;
