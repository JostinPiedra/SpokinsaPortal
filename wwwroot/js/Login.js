
jQuery(document).ready(function ($) {
    $('#txtUsuario').focus();

    $('#btnEntrar').on('click', function () {
        if ($('#txtUsuario').val() != "" & $('#txtClave').val() != "") {
            Validate($('#txtUsuario').val(), $('#txtClave').val());
        }
        else {
            Swal.fire(
                'Error',
                'Favor de ingresar Usuario y Contraseña',
                'error'
            );
        }
    });

    function Validate(usuario, clave) {
        var record = {
            NombreUsuario: usuario,
            Clave: clave
        };

        $.ajax({
            url: '/User/GetUsers',
            async: false,
            type: 'POST',
            data: record,
            beforeSend: function (xhr, opts) {

            },
            complete: function (data) {
                if (data.responseJSON.status == true) {
                    window.location.href = "/Home/Index";
                }
                else if (data.responseJSON.status == false) {
                    Swal.fire(
                        'Error',
                        data.message,
                        'error'
                    );
                }
            },
            error: function (data) {
                Swal.fire(
                    'Error',
                    data.message,
                    'error'
                );
            }
        });
    }

});