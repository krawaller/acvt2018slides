/** Warning: the original of this file is in the CSSDEMOS folder, don't edit it in the source folder! **/

$('.cssdemo .frame:first-child').addClass('selected')
$('.cssdemo .frames').on('click','.frame',function(){
  var next = ($(this).next().length ? $(this).next() : $(this).parent().find('.frame').eq(0) )
  $(this).removeClass('selected')
  next.addClass('selected')
})

document.addEventListener("keydown",function(e){
  var code = e.which || e.keyCode;
  if (code===67){
    $('.slide.present .frames .selected').trigger('click')
  }
});
