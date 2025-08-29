---
title: 'Code Scroll Test'
date: '2025-08-15'
tags: ['test']
---

# Code Scrolling Test

This post tests horizontal scrolling for code blocks.

## Long Line Test

```cpp
template<typename T, typename U, typename V, typename W, typename X, typename Y, typename Z>
class VeryLongClassNameThatShouldRequireHorizontalScrollingToSeeCompletely {
    public:
        VeryLongClassNameThatShouldRequireHorizontalScrollingToSeeCompletely() = default;
        auto very_long_function_name_that_exceeds_viewport_width(const std::vector<std::unordered_map<std::string, std::shared_ptr<T>>>& input) -> std::optional<std::tuple<U, V, W, X, Y, Z>>;
};
```

## JavaScript Long Line

```javascript
const veryLongVariableNameThatShouldRequireHorizontalScrolling = someVeryLongFunctionNameThatExceedsViewportWidth(parameterOne, parameterTwo, parameterThree, parameterFour, parameterFive, parameterSix);
```

## Normal Code

```python
def normal_function():
    return "This should fit normally"
```