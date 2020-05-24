import os
import cv2
from PIL import Image
import random

data_path = 'C:\\Users\\jing\\Desktop\\竖版-背景-0'
result_path = 'C:\\Users\\jing\\Desktop\\竖版-背景-0-compose'
result_size = [15360, 8640]
item_size = 960

def main():
    paths = os.listdir(data_path)
    for n in range(0, 10):
        canvas = Image.new(mode='RGB', size=tuple(result_size))
        index = 0
        while True:
            item = random.choice(paths)
            item_path = os.path.join(data_path, item)
            temp_img = Image.open(item_path)
            width = temp_img.size[0]
            height = temp_img.size[1]
            temp_img_crop = temp_img.crop((int(width / 2 - height / 2), 0, int(width / 2 + height / 2), height))
            temp_img_crop_resize = temp_img_crop.resize((item_size, item_size))
            # temp_img_crop_resize.show()

            i = int(index / int(result_size[0] / item_size))
            j = index % int(result_size[0] / item_size)
            canvas.paste(temp_img_crop_resize, (j * item_size, i * item_size))
            index += 1

            if index >= 144:
                break

        # canvas.show()
        canvas.save(os.path.join(result_path, 'test_%d.png' % n))
        print('test_%d.png' % n)


if __name__ == '__main__':
    main()
