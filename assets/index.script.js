$(function(){
    $('.iframe-editor').hide()
    $(`.iframe-editor[data-editor="${$('.tab-selected').data('editor')}"]`).show()
    
    $('.tab-item').click(function(){
        $('.tab-item').removeClass('tab-selected')
        $(this).addClass('tab-selected')
        $('.iframe-editor').hide()
        $(`.iframe-editor[data-editor="${$(this).data('editor')}"]`).show()
    })
    $('.iframe-editor div').on('input', function(){
        const html = $('.iframe-editor[data-editor="html"] div').html()
        const css = $('.iframe-editor[data-editor="css"] div').html()
        const js = $('.iframe-editor[data-editor="js"] div').html()

        const content = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"><\/script>
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>${js}</script>
        </body>
        </html>`
        
        $('.output iframe').attr('srcdoc', content)

    })
})
