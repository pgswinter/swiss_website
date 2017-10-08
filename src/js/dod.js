$(document).ready(function(){
	$('.amc-expertise.special-bio-pha').balanceItemOfBar({
		parent: $('.the_devide.title'),
		children: $('.item'),
		columnMobile: 2
	});
	$('.amc-expertise.special-bio-pha').balanceItemOfBar({
		parent: $('.the_devide.summary'),
		children: $('.item.summary')
	});
	$('.amc-expertise.special-bio-pha .the_devide.summary.parent').singleExpandDOD2();
	$('.amc-expertise.special-bio-pha .the_devide.summary.parent .the_devide.content.child ').singleExpandDOD21();

	$('.amc-expertise.special-bio-pha').balanceItemOfBar({
		parent: $('.the_devide.summary2'),
		children: $('.item.summary')
	});
	$('.amc-expertise.special-bio-pha .the_devide.summary2.parent').singleExpandDOD2();
});
