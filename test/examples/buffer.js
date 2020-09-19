import { Buffer } from 'buffer/'

if (Buffer.from('abc').length == 3) {
    done();
} else {
    done(new Error('Loading Buffer with a trailing /'));
}
