import React from 'react'

function Forecast(props) {
  return (
    <div>
      <div className=' flex items-center justify-start mt-6'>
        <p className=' text-white font-medium uppercase'>{props.title}</p>
      </div>
      <hr className=' my-2'/>

      <div className=' flex flex-row items-center justify-between text-white'>
        <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>
                04:30 PM
            </p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAaVBMVEX////4qAX1xSX4pgD1xyb1wgD1xCD2txj1xBv3sBH2vR7++ez1wxH3rQ34qwr1wiL99Nz646T3tBb30WP646j87cb52ob//vr41G72ykH2yTr64J376Lb53ZH413z31XX88M/3z1b7674jl2vNAAAEZklEQVRogdWb6ZKqOhCAJZcgS4ZFRMQF0Pd/yJOgQlYlEuy6XTU/jCNfdUgv6XQ2m/+J1Lnxq7xelVzgveGbCy7WBCenELc63eoWh6dkRfIZI4Qbdcbzhn1xXg+coAAhFJKLNH4hIR0P0HpKX6lmTKQZb1/D17XACUFPIf404/lpGl5L6XZEoGBc43scjKOkXQecYMQJ7tiM1504uI7SXchDEGl6uqaJMBZ2a4BzQTuGCVoUSmPY7OO+l06mIIXrQum8LXrRVykq60VWOt+3dtPQY4KxfyyqccmUqoI6CcvXD5JqfzxhKr0VuWIrJwgpHt2udxqG+nkqU6UpKL+fS59gEjKDI5U9eRCGD1HZBG9ovARNScPKAzqIJfkuWksQzgWr/0vuVuQLMTzXXpT4sojsP/+mT87I+3dkH8XxNor+mETRNo7fsokpi9FLYSJT6i79j4r3EvYh3cW+iU7ssiQ92ffjyOOgHof3IoPqluSrhuxnW09HHeneNtOwiV2+cFDJ2e4t98HeZSr5YEVuZfIHfTm9FbJduiAHpjidwx3YaSz+1DJ8HXmy70dzuQM7EtZ5eLQiC5EpmzXR/JTzb3uKXrPkxpFjO+7A5mY8vM2mJtWVi0z+1h5M0dtpwoPmWn3ODJP8fDthwkWbr8AMPT0iIDTKn3Mzvc73HU0ihCD3ncay1hQeYHw6Fpqdbp1c2kaiLtBY1vpBDzFu2ksi0ksN9bvFxaFj9YGMLq64vS7N8rMlYIrWuXEk7/215EVcJlqy9KJ1wcnKc2mVjtSHKqErUZVe9JKfaPVVq5u+o6J0uhjseamisurFe5m8wKAmUUyL9KojuYmBMXPAZSKmClonfhfetL9zoTJVeiesb6xL+2thA+NKZVHpoNEWCgtO6e/9tSyC/zbUCR/VrifZEZcJp7KpYsYlnA5s+SWcTRvT0Mmb2CVeH8jRON3m0tGU9znjMhlNypwLjoblcLK56daa1CDVONuOjPlJ3r215g2zqtfa9l247EnS6UVrrerAmbNLlanSk0VjdXXX5QT2nb5mlptwvqSUvFgiFDBdk/koTRrBtHKxkOjMdT7JQqgMEVcUrLCYd0ZOwZ4nJkUBHitkhZwJrUuezloOSgr255j8JwNwOyxqNetcnYwIXeKdJtNen4xwB6gz3Hv+ydqWdjmT+wazZ0AfBui3AWMVYHzeAOYkv8jDjMc4YLknXL4Nt8cA21ettZfkaq+GvSTY/hmuZgBXJwGrDcHVw8BqgHB1T7ha7yr17XRGfRuupv/LcwzxzA7u7Gagg5xXjcYFckY30kHOJV8CcxbLZNn5c7rg/BnuzB2uz0DprUC/6q2A6yeB66H5qm9I37TkpGMJvemVMnZqWZI/9IdlQn9YZuzQGsh2/WEzuvHed8JxZKfdeDZiSYbrfYTr91ze44q+7HGF6+t11svc2/Yya+RH/dsagetZh+vTB7ybAHcfA/AOCty9G8C7RnD3qwDvlMHdowO8O+hQ/gFyGGxs6WYegwAAAABJRU5ErkJggg==" alt="" className='w-12 my-1'/>
           <p className=' font-medium'>22</p>
        </div>

        <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>
                04:30 PM
            </p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAaVBMVEX////4qAX1xSX4pgD1xyb1wgD1xCD2txj1xBv3sBH2vR7++ez1wxH3rQ34qwr1wiL99Nz646T3tBb30WP646j87cb52ob//vr41G72ykH2yTr64J376Lb53ZH413z31XX88M/3z1b7674jl2vNAAAEZklEQVRogdWb6ZKqOhCAJZcgS4ZFRMQF0Pd/yJOgQlYlEuy6XTU/jCNfdUgv6XQ2m/+J1Lnxq7xelVzgveGbCy7WBCenELc63eoWh6dkRfIZI4Qbdcbzhn1xXg+coAAhFJKLNH4hIR0P0HpKX6lmTKQZb1/D17XACUFPIf404/lpGl5L6XZEoGBc43scjKOkXQecYMQJ7tiM1504uI7SXchDEGl6uqaJMBZ2a4BzQTuGCVoUSmPY7OO+l06mIIXrQum8LXrRVykq60VWOt+3dtPQY4KxfyyqccmUqoI6CcvXD5JqfzxhKr0VuWIrJwgpHt2udxqG+nkqU6UpKL+fS59gEjKDI5U9eRCGD1HZBG9ovARNScPKAzqIJfkuWksQzgWr/0vuVuQLMTzXXpT4sojsP/+mT87I+3dkH8XxNor+mETRNo7fsokpi9FLYSJT6i79j4r3EvYh3cW+iU7ssiQ92ffjyOOgHof3IoPqluSrhuxnW09HHeneNtOwiV2+cFDJ2e4t98HeZSr5YEVuZfIHfTm9FbJduiAHpjidwx3YaSz+1DJ8HXmy70dzuQM7EtZ5eLQiC5EpmzXR/JTzb3uKXrPkxpFjO+7A5mY8vM2mJtWVi0z+1h5M0dtpwoPmWn3ODJP8fDthwkWbr8AMPT0iIDTKn3Mzvc73HU0ihCD3ncay1hQeYHw6Fpqdbp1c2kaiLtBY1vpBDzFu2ksi0ksN9bvFxaFj9YGMLq64vS7N8rMlYIrWuXEk7/215EVcJlqy9KJ1wcnKc2mVjtSHKqErUZVe9JKfaPVVq5u+o6J0uhjseamisurFe5m8wKAmUUyL9KojuYmBMXPAZSKmClonfhfetL9zoTJVeiesb6xL+2thA+NKZVHpoNEWCgtO6e/9tSyC/zbUCR/VrifZEZcJp7KpYsYlnA5s+SWcTRvT0Mmb2CVeH8jRON3m0tGU9znjMhlNypwLjoblcLK56daa1CDVONuOjPlJ3r215g2zqtfa9l247EnS6UVrrerAmbNLlanSk0VjdXXX5QT2nb5mlptwvqSUvFgiFDBdk/koTRrBtHKxkOjMdT7JQqgMEVcUrLCYd0ZOwZ4nJkUBHitkhZwJrUuezloOSgr255j8JwNwOyxqNetcnYwIXeKdJtNen4xwB6gz3Hv+ydqWdjmT+wazZ0AfBui3AWMVYHzeAOYkv8jDjMc4YLknXL4Nt8cA21ettZfkaq+GvSTY/hmuZgBXJwGrDcHVw8BqgHB1T7ha7yr17XRGfRuupv/LcwzxzA7u7Gagg5xXjcYFckY30kHOJV8CcxbLZNn5c7rg/BnuzB2uz0DprUC/6q2A6yeB66H5qm9I37TkpGMJvemVMnZqWZI/9IdlQn9YZuzQGsh2/WEzuvHed8JxZKfdeDZiSYbrfYTr91ze44q+7HGF6+t11svc2/Yya+RH/dsagetZh+vTB7ybAHcfA/AOCty9G8C7RnD3qwDvlMHdowO8O+hQ/gFyGGxs6WYegwAAAABJRU5ErkJggg==" alt="" className='w-12 my-1'/>
           <p className=' font-medium'>22</p>
        </div>

        <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>
                04:30 PM
            </p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAaVBMVEX////4qAX1xSX4pgD1xyb1wgD1xCD2txj1xBv3sBH2vR7++ez1wxH3rQ34qwr1wiL99Nz646T3tBb30WP646j87cb52ob//vr41G72ykH2yTr64J376Lb53ZH413z31XX88M/3z1b7674jl2vNAAAEZklEQVRogdWb6ZKqOhCAJZcgS4ZFRMQF0Pd/yJOgQlYlEuy6XTU/jCNfdUgv6XQ2m/+J1Lnxq7xelVzgveGbCy7WBCenELc63eoWh6dkRfIZI4Qbdcbzhn1xXg+coAAhFJKLNH4hIR0P0HpKX6lmTKQZb1/D17XACUFPIf404/lpGl5L6XZEoGBc43scjKOkXQecYMQJ7tiM1504uI7SXchDEGl6uqaJMBZ2a4BzQTuGCVoUSmPY7OO+l06mIIXrQum8LXrRVykq60VWOt+3dtPQY4KxfyyqccmUqoI6CcvXD5JqfzxhKr0VuWIrJwgpHt2udxqG+nkqU6UpKL+fS59gEjKDI5U9eRCGD1HZBG9ovARNScPKAzqIJfkuWksQzgWr/0vuVuQLMTzXXpT4sojsP/+mT87I+3dkH8XxNor+mETRNo7fsokpi9FLYSJT6i79j4r3EvYh3cW+iU7ssiQ92ffjyOOgHof3IoPqluSrhuxnW09HHeneNtOwiV2+cFDJ2e4t98HeZSr5YEVuZfIHfTm9FbJduiAHpjidwx3YaSz+1DJ8HXmy70dzuQM7EtZ5eLQiC5EpmzXR/JTzb3uKXrPkxpFjO+7A5mY8vM2mJtWVi0z+1h5M0dtpwoPmWn3ODJP8fDthwkWbr8AMPT0iIDTKn3Mzvc73HU0ihCD3ncay1hQeYHw6Fpqdbp1c2kaiLtBY1vpBDzFu2ksi0ksN9bvFxaFj9YGMLq64vS7N8rMlYIrWuXEk7/215EVcJlqy9KJ1wcnKc2mVjtSHKqErUZVe9JKfaPVVq5u+o6J0uhjseamisurFe5m8wKAmUUyL9KojuYmBMXPAZSKmClonfhfetL9zoTJVeiesb6xL+2thA+NKZVHpoNEWCgtO6e/9tSyC/zbUCR/VrifZEZcJp7KpYsYlnA5s+SWcTRvT0Mmb2CVeH8jRON3m0tGU9znjMhlNypwLjoblcLK56daa1CDVONuOjPlJ3r215g2zqtfa9l247EnS6UVrrerAmbNLlanSk0VjdXXX5QT2nb5mlptwvqSUvFgiFDBdk/koTRrBtHKxkOjMdT7JQqgMEVcUrLCYd0ZOwZ4nJkUBHitkhZwJrUuezloOSgr255j8JwNwOyxqNetcnYwIXeKdJtNen4xwB6gz3Hv+ydqWdjmT+wazZ0AfBui3AWMVYHzeAOYkv8jDjMc4YLknXL4Nt8cA21ettZfkaq+GvSTY/hmuZgBXJwGrDcHVw8BqgHB1T7ha7yr17XRGfRuupv/LcwzxzA7u7Gagg5xXjcYFckY30kHOJV8CcxbLZNn5c7rg/BnuzB2uz0DprUC/6q2A6yeB66H5qm9I37TkpGMJvemVMnZqWZI/9IdlQn9YZuzQGsh2/WEzuvHed8JxZKfdeDZiSYbrfYTr91ze44q+7HGF6+t11svc2/Yya+RH/dsagetZh+vTB7ybAHcfA/AOCty9G8C7RnD3qwDvlMHdowO8O+hQ/gFyGGxs6WYegwAAAABJRU5ErkJggg==" alt="" className='w-12 my-1'/>
           <p className=' font-medium'>22</p>
        </div>

        <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>
                04:30 PM
            </p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAaVBMVEX////4qAX1xSX4pgD1xyb1wgD1xCD2txj1xBv3sBH2vR7++ez1wxH3rQ34qwr1wiL99Nz646T3tBb30WP646j87cb52ob//vr41G72ykH2yTr64J376Lb53ZH413z31XX88M/3z1b7674jl2vNAAAEZklEQVRogdWb6ZKqOhCAJZcgS4ZFRMQF0Pd/yJOgQlYlEuy6XTU/jCNfdUgv6XQ2m/+J1Lnxq7xelVzgveGbCy7WBCenELc63eoWh6dkRfIZI4Qbdcbzhn1xXg+coAAhFJKLNH4hIR0P0HpKX6lmTKQZb1/D17XACUFPIf404/lpGl5L6XZEoGBc43scjKOkXQecYMQJ7tiM1504uI7SXchDEGl6uqaJMBZ2a4BzQTuGCVoUSmPY7OO+l06mIIXrQum8LXrRVykq60VWOt+3dtPQY4KxfyyqccmUqoI6CcvXD5JqfzxhKr0VuWIrJwgpHt2udxqG+nkqU6UpKL+fS59gEjKDI5U9eRCGD1HZBG9ovARNScPKAzqIJfkuWksQzgWr/0vuVuQLMTzXXpT4sojsP/+mT87I+3dkH8XxNor+mETRNo7fsokpi9FLYSJT6i79j4r3EvYh3cW+iU7ssiQ92ffjyOOgHof3IoPqluSrhuxnW09HHeneNtOwiV2+cFDJ2e4t98HeZSr5YEVuZfIHfTm9FbJduiAHpjidwx3YaSz+1DJ8HXmy70dzuQM7EtZ5eLQiC5EpmzXR/JTzb3uKXrPkxpFjO+7A5mY8vM2mJtWVi0z+1h5M0dtpwoPmWn3ODJP8fDthwkWbr8AMPT0iIDTKn3Mzvc73HU0ihCD3ncay1hQeYHw6Fpqdbp1c2kaiLtBY1vpBDzFu2ksi0ksN9bvFxaFj9YGMLq64vS7N8rMlYIrWuXEk7/215EVcJlqy9KJ1wcnKc2mVjtSHKqErUZVe9JKfaPVVq5u+o6J0uhjseamisurFe5m8wKAmUUyL9KojuYmBMXPAZSKmClonfhfetL9zoTJVeiesb6xL+2thA+NKZVHpoNEWCgtO6e/9tSyC/zbUCR/VrifZEZcJp7KpYsYlnA5s+SWcTRvT0Mmb2CVeH8jRON3m0tGU9znjMhlNypwLjoblcLK56daa1CDVONuOjPlJ3r215g2zqtfa9l247EnS6UVrrerAmbNLlanSk0VjdXXX5QT2nb5mlptwvqSUvFgiFDBdk/koTRrBtHKxkOjMdT7JQqgMEVcUrLCYd0ZOwZ4nJkUBHitkhZwJrUuezloOSgr255j8JwNwOyxqNetcnYwIXeKdJtNen4xwB6gz3Hv+ydqWdjmT+wazZ0AfBui3AWMVYHzeAOYkv8jDjMc4YLknXL4Nt8cA21ettZfkaq+GvSTY/hmuZgBXJwGrDcHVw8BqgHB1T7ha7yr17XRGfRuupv/LcwzxzA7u7Gagg5xXjcYFckY30kHOJV8CcxbLZNn5c7rg/BnuzB2uz0DprUC/6q2A6yeB66H5qm9I37TkpGMJvemVMnZqWZI/9IdlQn9YZuzQGsh2/WEzuvHed8JxZKfdeDZiSYbrfYTr91ze44q+7HGF6+t11svc2/Yya+RH/dsagetZh+vTB7ybAHcfA/AOCty9G8C7RnD3qwDvlMHdowO8O+hQ/gFyGGxs6WYegwAAAABJRU5ErkJggg==" alt="" className='w-12 my-1'/>
           <p className=' font-medium'>22</p>
        </div>

        <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>
                04:30 PM
            </p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAaVBMVEX////4qAX1xSX4pgD1xyb1wgD1xCD2txj1xBv3sBH2vR7++ez1wxH3rQ34qwr1wiL99Nz646T3tBb30WP646j87cb52ob//vr41G72ykH2yTr64J376Lb53ZH413z31XX88M/3z1b7674jl2vNAAAEZklEQVRogdWb6ZKqOhCAJZcgS4ZFRMQF0Pd/yJOgQlYlEuy6XTU/jCNfdUgv6XQ2m/+J1Lnxq7xelVzgveGbCy7WBCenELc63eoWh6dkRfIZI4Qbdcbzhn1xXg+coAAhFJKLNH4hIR0P0HpKX6lmTKQZb1/D17XACUFPIf404/lpGl5L6XZEoGBc43scjKOkXQecYMQJ7tiM1504uI7SXchDEGl6uqaJMBZ2a4BzQTuGCVoUSmPY7OO+l06mIIXrQum8LXrRVykq60VWOt+3dtPQY4KxfyyqccmUqoI6CcvXD5JqfzxhKr0VuWIrJwgpHt2udxqG+nkqU6UpKL+fS59gEjKDI5U9eRCGD1HZBG9ovARNScPKAzqIJfkuWksQzgWr/0vuVuQLMTzXXpT4sojsP/+mT87I+3dkH8XxNor+mETRNo7fsokpi9FLYSJT6i79j4r3EvYh3cW+iU7ssiQ92ffjyOOgHof3IoPqluSrhuxnW09HHeneNtOwiV2+cFDJ2e4t98HeZSr5YEVuZfIHfTm9FbJduiAHpjidwx3YaSz+1DJ8HXmy70dzuQM7EtZ5eLQiC5EpmzXR/JTzb3uKXrPkxpFjO+7A5mY8vM2mJtWVi0z+1h5M0dtpwoPmWn3ODJP8fDthwkWbr8AMPT0iIDTKn3Mzvc73HU0ihCD3ncay1hQeYHw6Fpqdbp1c2kaiLtBY1vpBDzFu2ksi0ksN9bvFxaFj9YGMLq64vS7N8rMlYIrWuXEk7/215EVcJlqy9KJ1wcnKc2mVjtSHKqErUZVe9JKfaPVVq5u+o6J0uhjseamisurFe5m8wKAmUUyL9KojuYmBMXPAZSKmClonfhfetL9zoTJVeiesb6xL+2thA+NKZVHpoNEWCgtO6e/9tSyC/zbUCR/VrifZEZcJp7KpYsYlnA5s+SWcTRvT0Mmb2CVeH8jRON3m0tGU9znjMhlNypwLjoblcLK56daa1CDVONuOjPlJ3r215g2zqtfa9l247EnS6UVrrerAmbNLlanSk0VjdXXX5QT2nb5mlptwvqSUvFgiFDBdk/koTRrBtHKxkOjMdT7JQqgMEVcUrLCYd0ZOwZ4nJkUBHitkhZwJrUuezloOSgr255j8JwNwOyxqNetcnYwIXeKdJtNen4xwB6gz3Hv+ydqWdjmT+wazZ0AfBui3AWMVYHzeAOYkv8jDjMc4YLknXL4Nt8cA21ettZfkaq+GvSTY/hmuZgBXJwGrDcHVw8BqgHB1T7ha7yr17XRGfRuupv/LcwzxzA7u7Gagg5xXjcYFckY30kHOJV8CcxbLZNn5c7rg/BnuzB2uz0DprUC/6q2A6yeB66H5qm9I37TkpGMJvemVMnZqWZI/9IdlQn9YZuzQGsh2/WEzuvHed8JxZKfdeDZiSYbrfYTr91ze44q+7HGF6+t11svc2/Yya+RH/dsagetZh+vTB7ybAHcfA/AOCty9G8C7RnD3qwDvlMHdowO8O+hQ/gFyGGxs6WYegwAAAABJRU5ErkJggg==" alt="" className='w-12 my-1'/>
           <p className=' font-medium'>22</p>
        </div>
      </div>
    </div>
  )
}

export default Forecast
