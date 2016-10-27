package com.objectpartners.plummer.junit5;

import org.junit.jupiter.api.extension.ExtensionContext;
import org.junit.jupiter.api.extension.ParameterContext;
import org.junit.jupiter.api.extension.ParameterResolutionException;
import org.junit.jupiter.api.extension.ParameterResolver;

public class DependencyTrackerResolver implements ParameterResolver {
    private static final DependencyTracker TRACKER = new DependencyTracker();

    @Override
    public boolean supports(ParameterContext parameterContext, ExtensionContext extensionContext) throws ParameterResolutionException {
        return parameterContext.getParameter().getType() == DependencyTracker.class;
    }

    @Override
    public Object resolve(ParameterContext parameterContext, ExtensionContext extensionContext) throws ParameterResolutionException {
        TRACKER.prepare();
        return TRACKER;
    }

    public static class DependencyTracker {
        private long counter = 0;

        public void prepare() {
            System.out.println(String.format("Tracker requested %d times", ++counter));
        }
    }
}
