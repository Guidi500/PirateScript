describe ('return "elloharr" when input is "hello"' , ()=> {
    expect(piratize('hello')).to.equal('elloharr');
});

describe ('return "elloharr orldwarr" when input is "hello world"' , ()=> {
    expect(piratize('hello world')).to.equal('elloharr orldwarr');
});


describe ('return "izzaparr ostscarr 20 doubloons" when input is "pizza costs 20 pounds"' , ()=> {
    expect(piratize('pizza costs 20 pounds')).to.equal('izzaparr ostscarr 20 doubloons');
});

describe ('return "Iarr maarr trandedsarr ithwarr aarr umsarr foarr 4000 doubloons orthwarr foarr oldgarr endsarr elpharr" when input is "I am stranded with a sum of 4000 pounds worth of gold send help"' , ()=> {
    expect(piratize('I am stranded with a sum of 4000 pounds worth of gold send help')).to.equal('Iarr maarr trandedsarr ithwarr aarr umsarr foarr 4000 doubloons orthwarr foarr oldgarr endsarr elpharr');
});
