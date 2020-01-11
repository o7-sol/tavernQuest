module.exports = function(socket, io) {
    socket.on('guildMsgToServer', (data) => {
        io.emit('guildMsgToGuild', {
            message: data.message
        });
    });
  };