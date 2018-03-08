$(document).ready(function() {
  $('#AlertCicilan').hide();
});

$('#btn-submit').on('click', function() {
  $('#cicilan').append("");
  var HrgRumah = parseFloat($('#num1').val());
  var Dp = parseFloat($('#num2').val());
  var Tenor = parseFloat($('#num3').val());
  var Margin = parseFloat($('#num4').val());
  
  var JmlPinjam = HrgRumah - ((Dp/100)*HrgRumah); 
  var JmlBulan = Tenor * 12;
  var JmlMargin = (JmlPinjam * (Margin/100)) * Tenor;
  var JmlHutang = JmlPinjam + JmlMargin;
  var JmlCicilan = JmlHutang / JmlBulan;
  var TampilFormat = 'Rp ' + JmlCicilan.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  $('#cicilan').append(TampilFormat);
  $('#notifikasi').modal('show');
  $('#form-main')[0].reset();
});

$('#close-modal').on('click', function() {
  $('#cicilan').html("");
  $('#notifikasi').modal('hide');
});