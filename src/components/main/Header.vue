<template>
  <div class="header">
		<div style="height: 85px; align-items: center; display: flex; position: relative; z-index: 0; padding: 4px 16px; margin: 0; ">
			<div style=" width: 100%;  display: flex;  align-items: center;  justify-content: center;">
				<div class="header_environment"></div>
				<span class="header_title">AI 스마트 정수장 운영 시스템</span>
				<div class="header_kwater"></div>
				<div class="header_bottom"></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.header {
	height: 85px;
	margin: 0px;
	transform: translateY(0px);
	left: 0px;
	right: 0px;
	padding: 0px 0px 0px 32px;
	background-color: rgba(255, 255, 255, 0);
}

.header_logo {
	display: inline-block;
    width: 71px;
    height: 32px;    
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
    overflow: hidden;    
	/* background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAgCAMAAAB3n5XPAAAANlBMVEVHcEz///////////////////////////////////////////////////////////////////+GUsxbAAAAEXRSTlMAYHCgEPAggEDA0OCQUDCvsOcpQZgAAAIgSURBVEjHnZXXgoQwCEVNIYQ05f9/diEZHZ0dyy4PlohHwgWcpocWIiIRcbdE5NBEP/3JfC0E/M3ybNtDSEPiSwNnbuMKNvETm+MVJRI/NTynmNw9JKFY4zCDdlxYRHdIGV5RCGOY5GXEYoIqZkWjff6jXeCSE1N2VdycpmcxQRXb8ir4vSumM46fXZyq658i41v5lWyY7U6jVvI3TrT+BQEXgs1nGtW9sF+iWTMM6ON8WTl4UTgeYaPQyAcVHLbQR3BQwhnnJcAShAIL/uqhaNwBdtYXo29ioITtSZnHC47zBsNNx2C+40D17clEqHTJSeHxQFEhzjjLn4ZTzStHVNVTIWrTf8xv+SA5WmZz+wbai6edE5nL7Zfhasp0TgB29zvgO45PnLZ71MrxvXwQ+1yYZxv0RgeSrluc++SIaMSxvTkLp7dISRNldJtRd+w4NcsQNo7PUJvT58jUYNO9F+Uux8iLvp31CqfQnzHbbV8d4bWvhJMyhY2TMsNb88bQm7VNi3zLR23UQRhH0J8gKR4P4ki0otZuY8AhchEX4NeP1O45I7YROX/oJSvzu6DZFphyDr2wamaHR07ZOOmzfminqeElO3EqulT7gNlzEoNfOfTJ8ZKQddwGBrkOo5WLxh73HMNrrX3hqOuW66SZlqPuXuKZ8RUtcZaKEcGYapSSOnIQu+hV/pprD/eVONYNkfXY66650dNRzrK4egz7AdoyLpvfXq04AAAAAElFTkSuQmCC); */
}
.header_environment{
	width: 104px;
    height: 51px;
    background-image : url("@/assets/img/logo_environment.png");
}
.header_kwater{
	width: 96px;
    height: 53px;
	background-image : url("@/assets/img/logo_kwater.png");
}
.header_title{
	font-size: 35px;
    font-weight: bold;
    color: white;
    padding: 0 12px;
    cursor: pointer;
    font-family: 'KHNPHDRegular';
}

.header_bottom{
position: absolute;
    width: 100%;
    height: 32.9px;
    bottom: -10px;
    background-image: url(data:image/png;base64,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);
    background-position-x: right;
    background-repeat: no-repeat;
}
/*header css 끝*/
</style>